const Truck = require("../models/Truck");

const CreateTruck = async(req, res) => {
    try {
        const {plateNumber, model, capacityTons, status, assignedDriver} = req.body;

        const truckExist = await Truck.findOne({plateNumber})

        if(truckExist){
            return res.status(409).json({message: "Truck already exist."})
        }

        const newTruck = new Truck({
            plateNumber, model, capacityTons, status, assignedDriver
        });
        const savedTruck = await newTruck.save();
        res.status(201).json({message: "Truck created successfully", "TruckId ": savedTruck._id})
    } catch (error) {
        console.error({message: error.message})
        res.status(500).json("Internal server error")
    }
}

module.exports = {CreateTruck}