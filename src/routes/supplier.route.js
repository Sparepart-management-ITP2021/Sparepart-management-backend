const express = require('express');
const router = express.Router();

const SupplierController = require('../controllers/supplier.controller');

const SupplierAPI = () => {
    router.post("/add-supplier", SupplierController.addSupplier);
    router.get("/get-supplier", SupplierController.getSupplier);

    return router;
}

module.exports = SupplierAPI;