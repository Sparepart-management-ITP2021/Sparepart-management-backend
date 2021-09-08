const express = require('express');
const router = express.Router();

const insertpaymentController = require('../controllers/insertpayment.controller');

const insertpaymentAPI = () => {
    router.post("/add-payment", insertpaymentController.addpayment);

    return router;
}

module.exports = insertpaymentAPI;