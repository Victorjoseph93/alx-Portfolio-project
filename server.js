const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const classRoutes = require('./routes/class');
const attendanceRoutes = require('./routes/attendance');
const gradeRoutes = require('./routes/grade');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/grades', gradeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port for parsing JSON requests and handling CORS.
- Connection to a MongoDB database using Mongoose.
- Routes for handling API requests related to students, teachers, classes, attendance, and grades.
- Server listening on a specified port (default is 5000).

