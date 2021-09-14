const express = require('express');
const router = express.Router();

const DeliveryInfocontroller = require('../controllers/deliveryInfo.controller');

const  DeliveryInfoAPI = () => {
    router.post("/add-deliveryInfo", DeliveryInfocontroller.addDeliveryInfo);
    router.get("/get-deliveryInfo", DeliveryInfocontroller.getDeliveryInfo);
    router.delete("/delete-deliveryInfo/:id", DeliveryInfocontroller.deleteDeliveryInfo);
    router.get("/get-deliveryInfo/:id", DeliveryInfocontroller.getDeliveryInfoById);
    router.put("/update-deliveryInfo/:id", DeliveryInfocontroller.updateDeliveryInfo);
    return router;
}

module.exports = DeliveryInfoAPI;