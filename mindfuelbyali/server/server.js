import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import apiRateLimiter from './middleware/rateLimiter.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigin = process.env.ALLOWED_ORIGIN;

app.use(
  cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST']
  })
);
app.use(express.json());
app.use('/api', apiRateLimiter);

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/contact', contactRouter);

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.listen(port, () => {
  process.stdout.write(`MindFuelByAli server listening on port ${port}\n`);
});
