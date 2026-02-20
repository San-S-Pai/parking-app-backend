import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

// --- THE INTEGRATION HUB ---
app.use(cors()); // This tells the server: "Allow the browser app to talk to me"
app.use(express.json()); // This allows the server to read the email/password you type

// ROUTES
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});