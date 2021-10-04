const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/employee.controller');

const EmployeeAPI = () => {
    router.post("/add-employee", EmployeeController.addEmployee);
    router.get("/get-employee", EmployeeController.getEmployee);
    router.delete("/delete-employee/:id",EmployeeController.deleteEmployee);
    router.get("/get-employee/:id", EmployeeController.  getEmployeeById);
    router.put("/update-employee/:id", EmployeeController.updateEmployee);
    return router;
}

module.exports = EmployeeAPI;