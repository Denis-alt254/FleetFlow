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

const EditTruck = async(req, res) => {
    try {
        const truckId = req.params.id;

        const {plateNumber, model, capacityTons, status, assignedDriver} = req.body;

        //find truck
        const truck = await Truck.findById(truckId);

        if(!truck){
            return res.status(404).json({error: "Truck not found"});
        }

        fieldsToEdit = ["plateNumber", "model", "capacityTons", "status", "assignedDriver"];

        fieldsToEdit.forEach(field => {
            if(req.body[field] !== undefined){
                truck[field] = req.body[field]
            }
        });

        const editedTruck = await truck.save();
        res.status(200).json({message: "Edited successfully", 'truckId': editedTruck._id })
    } catch (error) {
        console.error({"Error editing truck": error.message})
        res.status(500).json("Internal server error.")
    }
}

module.exports = {CreateTruck, EditTruck}