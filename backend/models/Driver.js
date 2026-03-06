const { default: mongoose, model } = require("mongoose");

const DriverSchema = new mongoose.Schema({
    name: String,
    phone: String,
    licenseNumber: String,
    assignedTruck: {type: mongoose.Schema.Types.ObjectId, ref: 'Truck'},
    status: 'ACTIVE' | 'INACTIVE' 
}, {timestamps: true});

module.exports = mongoose.model('Driver', DriverSchema);