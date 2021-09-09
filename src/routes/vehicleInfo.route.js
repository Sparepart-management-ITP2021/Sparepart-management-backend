const express = require('express');
const router = express.Router();

const VehicleInfocontroller = require('../controllers/vehicleInfo.controller');

const  VehicleInfoAPI = () => {
    router.post("/add-vehicleInfo", VehicleInfocontroller.addVehicleInfo);

    return router;
}

module.exports = VehicleInfoAPI;