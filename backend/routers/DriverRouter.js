const express = require('express');
const { AddDriver, GetDrivers } = require('../controllers/DriverController');
const router = express.Router();

router.post('/add', AddDriver);
router.get('/', GetDrivers);

module.exports = router;