import nodemailer from 'nodemailer';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, budget, message } = req.body || {};
  const details = [];

  if (!name || String(name).trim().length < 2) details.push('Name is required and must be at least 2 characters.');
  if (!email || !isValidEmail(email)) details.push('A valid email address is required.');
  if (!service) details.push('Service is required.');
  if (!message || String(message).trim().length < 20) details.push('Message must be at least 20 characters.');

  if (details.length) {
    return res.status(400).json({ error: 'Validation failed', details });
  }

  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    return res.status(500).json({ error: 'Email service is not configured on the server.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeBudget = budget ? escapeHtml(budget) : 'Not specified';
  const safeMessage = escapeHtml(message);
  const timestamp = new Date().toISOString();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden;">
      <div style="background: #1A1A2E; color: #FFFFFF; padding: 20px;">
        <h2 style="margin: 0;">New Inquiry from ${safeName} - ${safeService}</h2>
      </div>
      <div style="padding: 20px; background: #FFFFFF;">
        <p style="margin: 0 0 10px;"><strong>Name:</strong> ${safeName}</p>
        <p style="margin: 0 0 10px;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="margin: 0 0 10px;"><strong>Service:</strong> ${safeService}</p>
        <p style="margin: 0 0 10px;"><strong>Budget:</strong> ${safeBudget}</p>
        <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
        <p style="margin: 0; padding: 14px; background: #F5F5F7; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        <p style="margin-top: 16px; color: #6B7280; font-size: 12px;">Timestamp (UTC): ${timestamp}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `New Inquiry from ${safeName} - ${safeService}`,
      html,
      replyTo: safeEmail
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
