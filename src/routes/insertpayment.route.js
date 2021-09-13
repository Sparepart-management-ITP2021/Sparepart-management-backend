const express = require('express');
const router = express.Router();

const insertpaymentController = require('../controllers/insertpayment.controller');

const insertpaymentAPI = () => {
    router.post("/add-insertpayment", insertpaymentController.addInsertPayment);
    router.get("/get-insertpayment", insertpaymentController.getInsertPayment);
    router.delete("/delete-insertpayment/:id", insertpaymentController.deleteInsertPayment);

    return router;
}

module.exports = insertpaymentAPI;