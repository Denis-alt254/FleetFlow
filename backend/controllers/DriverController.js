const Driver = require("../models/Driver");

const AddDriver = async(req, res) => {
    try {
        const {name, phone, licenseNumber, assignedTruck, status} = req.body;
        const driverExist = await Driver.findOne({name});

        if(driverExit){
            return res.status(409).json({error: "Truck already exist."});
        }

        const newDriver = new Driver({
            name, phone, licenseNumber, assignedTruck, status
        });

        const savedDriver = await newDriver .save();
        res.status(201).json({message: "Driver added successfully", "DriverId": savedDriver._id});
    } catch (error) {
        console.error({"Registration Error ": error.message})
        res.status(500).json("Internal server error.");
    }
}

const GetDrivers = async(req, res) => {
    try {
        const drivers = await Driver.find();
        res.status(200).json(drivers);
    } catch (error) {
        console.error({"Error getting Drivers": error.message});
        res.status(500).json("Internal server error");
    }
}

module.exports = {AddDriver, GetDrivers};