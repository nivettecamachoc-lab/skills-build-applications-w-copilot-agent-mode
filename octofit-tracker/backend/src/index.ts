import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`OctoFit API running on port ${PORT}`);
});
