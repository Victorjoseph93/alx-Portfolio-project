// teacherRoutes.js

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a new teacher
router.post('/add', authMiddleware.verifyToken, teacherController.addTeacher);

// Route to update teacher details
router.put('/update/:id', authMiddleware.verifyToken, teacherController.updateTeacher);

// Route to get a list of all teachers
router.get('/list', authMiddleware.verifyToken, teacherController.getAllTeachers);

// Route to get details of a specific teacher
router.get('/:id', authMiddleware.verifyToken, teacherController.getTeacherById);

// Route to delete a teacher
router.delete('/delete/:id', authMiddleware.verifyToken, teacherController.deleteTeacher);

module.exports = router;
