// gradeRoutes.js

const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a new grade
router.post('/add', authMiddleware.verifyToken, gradeController.addGrade);

// Route to update grade details
router.put('/update/:id', authMiddleware.verifyToken, gradeController.updateGrade);

// Route to get a list of all grades
router.get('/list', authMiddleware.verifyToken, gradeController.getAllGrades);

// Route to get details of a specific grade
router.get('/:id', authMiddleware.verifyToken, gradeController.getGradeById);

// Route to delete a grade
router.delete('/delete/:id', authMiddleware.verifyToken, gradeController.deleteGrade);

module.exports = router;
