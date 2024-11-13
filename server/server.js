const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Define Routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
