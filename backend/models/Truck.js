const { default: mongoose } = require("mongoose");

const TruckSchema = new mongoose.Schema({
    plateNumber: String,
    model: String,
    capacityTons: Number,
    status: {type: String, enum:['ACTIVE' | 'MAINTENANCE' | 'INACTIVE'], default: 'ACTIVE'},
    assignedDriver: {type: mongoose.Schema.Types.ObjectId, ref: 'Driver'}
}, {timestamps: true});

module.exports = mongoose.model('Truck', TruckSchema);