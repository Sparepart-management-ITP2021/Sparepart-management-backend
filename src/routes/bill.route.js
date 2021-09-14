const express = require('express');
const router = express.Router();

const BillController = require('../controllers/bill.controller');

const BillAPI = () => {
    router.post("/add-bill", BillController.addBill);

    return router;
}

module.exports = BillAPI;