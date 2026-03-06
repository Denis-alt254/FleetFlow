const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routers/DriverRouter');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to database
connectDB();

// Routes
app.use('/api/drivers', router);

app.listen(PORT, () => {
    console.log(`server is listening in http://localhost:${PORT}`);
})