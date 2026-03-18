# MindFuelByAli

MindFuelByAli is a boutique AI, Machine Learning, and Data Science studio website built as a modern full-stack platform designed to convert visitors into clients. The frontend delivers a premium, responsive experience with animated sections, service showcases, pricing, testimonials, and a validated contact form.

## Local Development Setup

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
node server.js
```

## Environment Variables Setup

### Local Development (Express backend)

1. Copy server/.env.example to server/.env.
2. Fill in:

- PORT
- ALLOWED_ORIGIN
- EMAIL_USER
- EMAIL_PASS
- EMAIL_TO

3. Optional for frontend local env:

- VITE_API_URL (if omitted, frontend uses http://localhost:5000 in development).

### Vercel Deployment (Frontend + API in one project)

Use the client folder as the Vercel Root Directory. The contact endpoint is deployed from client/api/contact.js.

1. Connect your GitHub repository to Vercel.
2. Set Root Directory to client.
3. Framework Preset: Vite.
4. Build command: npm run build.
5. Output directory: dist.
6. Add Production environment variables in Vercel project settings:

- EMAIL_USER (your Gmail address)
- EMAIL_PASS (Google App Password, not your normal Gmail password)
- EMAIL_TO (where you want client inquiries delivered)

7. Leave VITE_API_URL empty in production so requests use same-origin /api/contact.
8. Deploy.

## Contact Form Email Flow on Vercel

1. Visitor submits the form on your website.
2. Frontend calls /api/contact.
3. Vercel serverless function sends email through Gmail SMTP.
4. Inquiry lands in EMAIL_TO inbox.

## Gmail SMTP Setup

1. Enable 2FA for the Gmail account used for sending emails.
2. Generate an App Password in Google Account security settings.
3. Use that value in `EMAIL_PASS`.
4. Set `EMAIL_USER` to the Gmail address and `EMAIL_TO` to your inbox address.

## Post-Deployment Checklist

1. Verify `https://yourdomain.com` loads all sections and animations.
2. Test navigation anchors and active link highlighting.
3. Submit contact form and confirm delivery in inbox.
4. Validate Open Graph preview image and metadata.
5. Confirm robots.txt, sitemap.xml, and favicon are accessible.
6. Run Lighthouse audit for performance, accessibility, and SEO.
