
const express = require('express');
const router = express.Router();

const InventoryController = require('../controllers/inventory.controller');

const InventoryAPI = () => {
    router.post("/add-inventory", InventoryController.addInventory);
    router.get("/get-inventory", InventoryController.getInventory);
    return router;
}

module.exports = InventoryAPI;