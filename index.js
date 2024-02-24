import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { checkHeaders } from './src/middleware/checkHeaders.js';
import healthDataRoutes from './src/routes/healthDataRoutes.js';

// Set up express app
const app = express();
const PORT = 8086;

// Connect to the mongodb cluster and set up environment variables
dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB with Mongoose'))
  .catch(err => console.error('Connection error with Mongoose:', err));

// Middleware 
app.use(express.json({ limit: '1gb'}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(checkHeaders);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});
  
// Routes
app.use('/api', healthDataRoutes); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
