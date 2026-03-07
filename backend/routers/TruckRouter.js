const express = require('express')
const { CreateTruck, EditTruck } = require('../controllers/TruckController')
const router = express.Router()

router.post('/create', CreateTruck)
router.put('/edit', EditTruck)

module.exports = router