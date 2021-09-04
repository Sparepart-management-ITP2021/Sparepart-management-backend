const express = require('express');
const router = express.Router();

const SupplierController = require('../controllers/supplier.controller');

const SupplierAPI = () => {
    router.post("/add-supplier", SupplierController.addSupplier);

    return router;
}

module.exports = SupplierAPI;