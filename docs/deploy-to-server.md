# Deploy: GitHub → Server (55.is)

The site now runs as a full Next.js server (standalone output) so API routes such as `/api/contact` work in production. Each push to `main` builds the app in GitHub Actions, rsyncs the bundled server to `/var/www/55-site/current`, writes a `.env.production`, and restarts PM2.

## Domains & layout

- WordPress stays isolated on `https://wp.55.is`
- `https://55.is` serves this Next.js app via Nginx → PM2 → Node
- Runtime folder: `/var/www/55-site/current`

## GitHub Actions workflow summary

1. Checkout + install dependencies
2. `npm run build` (Next.js creates `.next/standalone`)
3. rsync the following to the server:
   - `.next/standalone/` → runtime root (contains `server.js` and node_modules)
   - `.next/static/` → `${runtime}/.next/static`
   - `public/`
   - `ecosystem.config.cjs`
4. Upload a fresh `.env.production` populated from GitHub Secrets
5. `pm2 startOrReload ecosystem.config.cjs`

The workflow requires these secrets:

| Secret | Purpose |
| --- | --- |
| `SSH_HOST`, `SSH_PORT`, `SSH_USER`, `SSH_PRIVATE_KEY` | SSH access for rsync / PM2 |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECIPIENT`, `CONTACT_FROM` | Contact email |
| `HUBSPOT_TOKEN`, `META_CAPI_TOKEN`, `META_CAPI_PIXEL_ID`, `META_CAPI_TEST_EVENT_CODE` | Integrations |

## One-time server setup

1. **Install Node + PM2**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt install -y nodejs build-essential
   sudo npm i -g pm2
   pm2 startup systemd -u thor --hp /home/thor
   ```
2. **Prepare deployment folder**
   ```bash
   sudo mkdir -p /var/www/55-site/current
   sudo chown -R thor:www-data /var/www/55-site/current
   sudo chmod -R g+rwX /var/www/55-site/current
   ```
3. **Authorize SSH key + rsync** (same as before)
4. **Nginx reverse proxy (important!)**

   Ensure the 55.is vhost forwards traffic to the Node server (listening on `127.0.0.1:3000`). Example:
   ```nginx
   server {
     listen 80;
     listen 443 ssl http2;
     server_name 55.is;

     ssl_certificate /etc/letsencrypt/live/55.is/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/55.is/privkey.pem;

     location / {
       proxy_pass http://127.0.0.1:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
     }
   }
   ```
   Reload Nginx after editing.

5. **PM2 process**
   - First deploy will create `/var/www/55-site/current/server.js`
   - PM2 uses `ecosystem.config.cjs` (shipped with the repo) to run `node server.js` with `HOSTNAME=0.0.0.0` and `PORT=3000`
   - `pm2 save` keeps the process alive across reboots

## Manual verification

From your laptop:

```bash
nc -vz SSH_HOST SSH_PORT
ssh -p SSH_PORT thor@SSH_HOST "pm2 status 55is"
```

On the server:

```bash
cd /var/www/55-site/current
ls -lah
pm2 logs 55is
curl -I http://127.0.0.1:3000/
```

From the internet: `curl -I https://55.is`, submit the contact form, ensure email arrives.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `pm2` not found in deploy logs | Install pm2 globally and rerun `pm2 startup`, `pm2 save` |
| Contact form 405 | Nginx still serving static files; update vhost to proxy to Node |
| 500 on `/api/contact` | Check `/var/www/55-site/current/.env.production` matches expected secrets |
| Static assets 404 | Ensure `.next/static` and `public` were rsynced (workflow handles automatically) |

Once these pieces are in place, the contact API and any future server routes work exactly as in local development. Push → build → rsync → PM2 reload. All that’s left is enjoying working forms in production.
