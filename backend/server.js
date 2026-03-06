const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// connect to database
connectDB();

app.listen(PORT, () => {
    console.log(`server is listening in http://localhost:${PORT}`);
})