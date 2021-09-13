const express = require('express');
const router = express.Router();

const AttendanceController = require('../controllers/attendance.controller');

const AttendanceAPI = () => {
    router.post("/add-attendance", AttendanceController.addAttendance);
    router.get("/get-attendance", AttendanceController.getAttendance);

    return router;
}

module.exports = AttendanceAPI;