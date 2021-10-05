const express = require('express');
const router = express.Router();

const BillController = require('../controllers/bill.controller');

const BillAPI = () => {
    router.post("/add-bill", BillController.addBill);
    router.get("/get-bill", BillController.getBill);
    router.delete("/delete-bill/:id", BillController.deleteBill);
    router.get("/get-bill/:id", BillController. getBillById);
    router.put("/update-bill/:id", BillController.updateBill);
    return router;
}

module.exports = BillAPI;