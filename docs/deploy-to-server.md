# Deploy: GitHub → Server (55.is)

This project auto-deploys to the server on every push to `main` using GitHub Actions + SSH + rsync.

## What we deployed

We split the old WordPress site away from the main domain:

- WordPress lives on: `https://wp.55.is`
- New custom site lives on: `https://55.is`

Nginx web root for the new site:

- Live folder: `/var/www/55-site/current`

Nginx serves whatever files exist in that folder. For a static site, Nginx reload is not required per deploy.

Server SSH configuration:

- SSH port: `2222`
- User: `thor`
- UFW allows: `80`, `443`, `2222`

## How deployments work

1. You push changes to GitHub on branch `main`
2. GitHub Actions runs:
   - checkout
   - node setup
   - install dependencies
   - build
3. GitHub Actions uses rsync over SSH to upload build output to the server:
   - destination: `/var/www/55-site/current/`

### Build output mapping

The deploy workflow checks output folders in this order:

1. `out/` (Next.js static export)
2. `dist/` (Vite fallback)
3. `build/`
4. Repo root (static fallback)

## Required GitHub Secrets

Repo settings → Secrets and variables → Actions

- `SSH_HOST` = server IP (example: `146.190.18.106`)
- `SSH_PORT` = `2222`
- `SSH_USER` = `thor`
- `SSH_PRIVATE_KEY` = OpenSSH private key (`BEGIN OPENSSH PRIVATE KEY` ... `END OPENSSH PRIVATE KEY`)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECIPIENT`, `CONTACT_FROM`

Important: treat these keys as sensitive. If they leak, rotate them immediately.

## Server setup (one-time)

On the server:

1. Ensure `thor` can write to the live web folder:
   ```bash
   sudo chown -R thor:www-data /var/www/55-site/current
   sudo chmod -R g+rwX /var/www/55-site/current

	2.	Ensure rsync is installed:

rsync --version || sudo apt update && sudo apt install -y rsync


	3.	Ensure the deploy public key is in:
	•	/home/thor/.ssh/authorized_keys

Permissions should be:

sudo chmod 700 /home/thor/.ssh
sudo chmod 600 /home/thor/.ssh/authorized_keys
sudo chown -R thor:thor /home/thor/.ssh

Manual sanity checks

From local machine:

nc -vz 146.190.18.106 2222
ssh -p 2222 -i ~/deploy-55is thor@146.190.18.106 "whoami"

On server:

ls -lah /var/www/55-site/current | head

Public check:
	•	Open https://55.is in a private window.
	•	Or:

curl -I --http1.1 https://55.is



Troubleshooting

GitHub Actions fails at ssh-keyscan

Cause: wrong host/port or firewall blocks access.
Fix:
	•	confirm SSH_PORT is 2222
	•	confirm UFW allows 2222
	•	confirm provider firewall allows 2222

Deploy succeeds but site does not update

Common causes:
	•	build output folder is not dist/ or build/
	•	Nginx root is not /var/www/55-site/current
	•	browser cache

Check:

ls -lah /var/www/55-site/current

WordPress redirects or breaks

WordPress should only be on wp.55.is.
If 55.is shows WP, the 55.is vhost is pointing to the wrong root.
