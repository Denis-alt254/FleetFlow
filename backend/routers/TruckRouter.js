const express = require('express')
const { CreateTruck, EditTruck } = require('../controllers/TruckController')
const router = express.Router()

router.post('/create', CreateTruck)
router.put('/edit/:id', EditTruck)

module.exports = router