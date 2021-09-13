const express = require('express');
const router = express.Router();

const CalculateSalaryController = require('../controllers/calculateSalary.controller');

const calculateSalaryAPI = () => {
    router.post("/add-calculateSalary", CalculateSalaryController.addCalculateSalary);
    router.get("/get-calculateSalary", CalculateSalaryController.getCalculateSalary);


    return router;
}

module.exports = calculateSalaryAPI;