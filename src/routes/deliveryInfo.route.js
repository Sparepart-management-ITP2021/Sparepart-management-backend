const express = require('express');
const router = express.Router();

const DeliveryInfocontroller = require('../controllers/deliveryInfo.controller');

const  DeliveryInfoAPI = () => {
    router.post("/add-deliveryInfo", DeliveryInfocontroller.addDeliveryInfo);
    router.get("/get-deliveryInfo", DeliveryInfocontroller.getDeliveryInfo);
    router.delete("/delete-deliveryInfo/:id", DeliveryInfocontroller.deleteDeliveryInfo);
    return router;
}

module.exports = DeliveryInfoAPI;