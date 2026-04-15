// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes import
import studentsRoutes from './Routes/studentRoutes.js';
import subjectsRoutes from './Routes/subjectRoutes.js';
import resultsRoutes from './Routes/resultRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import leaderboardRoutes from "./Routes/leaderboardRoutes.js";
import pdfRoutes from "./Routes/pdfRoutes.js";




dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI,)
 
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ DB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentsRoutes);
app.use('/api/subjects', subjectsRoutes);
app.use('/api/results', resultsRoutes);
app.use("/api", leaderboardRoutes);
app.use("/api", pdfRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Online Exam Result System API is running...');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
