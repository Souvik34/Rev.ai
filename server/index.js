import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import aiRouter from './src/routes/ai.routes.js';

dotenv.config({ path: './.env' });

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));

app.use(express.json());
app.use('/ai', aiRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at:`, PORT);
});
