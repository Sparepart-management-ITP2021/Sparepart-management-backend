const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

const EmployeeAPI = () => {
    router.post("/add-employee", EmployeeController.addEmployee);
    router.get("/get-employee", EmployeeController.getEmployee);

    return router;
}

module.exports = EmployeeAPI;