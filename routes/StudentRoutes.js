// studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a new student
router.post('/add', authMiddleware.verifyToken, studentController.addStudent);

// Route to update student details
router.put('/update/:id', authMiddleware.verifyToken, studentController.updateStudent);

// Route to get a list of all students
router.get('/list', authMiddleware.verifyToken, studentController.getAllStudents);

// Route to get details of a specific student
router.get('/:id', authMiddleware.verifyToken, studentController.getStudentById);

// Route to delete a student
router.delete('/delete/:id', authMiddleware.verifyToken, studentController.deleteStudent);

module.exports = router;
