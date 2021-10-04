const express = require('express');
const router = express.Router();

const AttendanceController = require('../controllers/attendance.controller');

const AttendanceAPI = () => {
    router.post("/add-attendance", AttendanceController.addAttendance);
    router.get("/get-attendance", AttendanceController.getAttendance);
    router.delete("/delete-attendance/:id",AttendanceController.deleteAttendance);

    return router;
}

module.exports = AttendanceAPI;