const Teacher = require('../models/Teacher');

// Controller to get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teachers', error });
    }
};

// Controller to get a teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teacher', error });
    }
};

// Controller to create a new teacher
exports.createTeacher = async (req, res) => {
    try {
        const newTeacher = new Teacher(req.body);
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Error creating teacher', error });
    }
};

// Controller to update a teacher by ID
exports.updateTeacher = async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(500).json({ message: 'Error updating teacher', error });
    }
};

// Controller to delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting teacher', error });
    }
};
