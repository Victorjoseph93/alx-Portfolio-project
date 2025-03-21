// attendanceRoutes.js

const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to mark attendance
router.post('/mark', authMiddleware.verifyToken, attendanceController.markAttendance);

// Route to update attendance
router.put('/update/:id', authMiddleware.verifyToken, attendanceController.updateAttendance);

// Route to get a list of attendance records
router.get('/list', authMiddleware.verifyToken, attendanceController.getAllAttendanceRecords);

// Route to get attendance details of a specific student
router.get('/:id', authMiddleware.verifyToken, attendanceController.getAttendanceById);

// Route to delete an attendance record
router.delete('/delete/:id', authMiddleware.verifyToken, attendanceController.deleteAttendance);

module.exports = router;
