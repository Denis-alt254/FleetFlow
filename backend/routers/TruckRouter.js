const express = require('express')
const { CreateTruck } = require('../controllers/TruckController')
const router = express.Router()

router.post('/create', CreateTruck)

module.exports = router