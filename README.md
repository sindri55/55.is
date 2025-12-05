## Deploy to production (55.is)

This repo auto-deploys on every push to `main` using GitHub Actions.

- Production site: `https://55.is`
- WordPress (legacy): `https://wp.55.is`

Docs:
- See `docs/deploy-to-server.md` for the full setup, secrets, server paths, and troubleshooting.

Quick workflow:
1. Make changes locally in Cursor
2. `npm run dev` locally if you want a preview (Next.js 14 + Tailwind)
3. `git commit` + `git push` to `main`
4. GitHub Actions runs `npm run build` (Next.js static export) and deploys the generated `out/` folder to the server

If a deploy fails, check the GitHub Actions logs first.

## Environment variables

Create a `.env.local` (see `.env.example`) with SMTP credentials so the contact form can send email notifications:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_RECIPIENT` – mailbox that should receive leads
- `CONTACT_FROM` – optional from address (defaults to `SMTP_USER`)

## Contact form + notifications

The drawer form (“Hey! Segðu okkur frá verkefninu”) posts to `/api/contact`:

- The API validates the payload and forwards the message via SMTP to `CONTACT_RECIPIENT`.
- Secrets never leave the client; failure is reported with a toast in the UI and a 502 response.

To verify locally:
1. Fill out `.env.local` with working SMTP credentials (Gmail, Postmark, Mailgun, etc.).
2. `npm run dev`
3. Open `http://localhost:3000`, open the contact drawer, and submit a test lead.
4. Watch the terminal for `[contact]` errors; fix SMTP values if necessary.
5. Confirm the email arrives in the recipient inbox.

## Tech stack

- Next.js 14 App Router (static export)
- React 18.3
- Tailwind CSS + Framer Motion
- Structured data (JSON-LD), sitemap.xml, robots.txt for SEO

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
# static site will be in out/
```
