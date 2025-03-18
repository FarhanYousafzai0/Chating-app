import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import router from './Routes/authRoutes.js';
import cookieParser  from 'cookie-parser';
import connectDB from './Config/ConnectToDB.js';
import { routerMessage } from './Routes/messageRoutes.js';
import userRoute from './Routes/userRoute.js'

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Database Connection
connectDB();

// Middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
// CORS Setup
app.use(cors({
    origin: process.env.CLIENT_URL || '*', // Allows frontend URL for better security
    credentials: true // Ensures cookies and headers are managed properly
}));

// Routes
app.use('/api/auth', router);       // Authentication routes
app.use('/api/message', routerMessage); // Message routes
app.use('/api/users',userRoute)
// 404 Handler (Optional but recommended)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found!" });
});

// Global Error Handler (Optional for better error control)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error!" });
});

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`.blue);
});
