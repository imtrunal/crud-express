// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Connect to MongoDB
require('./database/conn')

// Export app for testing purposes
module.exports = app;
