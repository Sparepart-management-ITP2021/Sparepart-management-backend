const express = require('express');
const router = express.Router();

const DeliveryInfocontroller = require('../controllers/deliveryInfo.controller');

const  DeliveryInfoAPI = () => {
    router.post("/add-deliveryInfo", DeliveryInfocontroller.addDeliveryInfo);

    return router;
}

module.exports = DeliveryInfoAPI;