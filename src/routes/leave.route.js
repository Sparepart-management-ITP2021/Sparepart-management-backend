const express = require('express');
const router = express.Router();

const LeaveController = require('../controllers/leave.controller');

const LeaveAPI = () => {
    router.post("/add-leave", LeaveController.addLeave);
    router.get("/get-leave", LeaveController.getLeave);


    return router;
}

module.exports = LeaveAPI;