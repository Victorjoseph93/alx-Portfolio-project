const API_BASE_URL = 'https://api.yourschoolmanagementsystem.com'; // Replace with your actual API base URL

// Function to get student profile by ID
export async function getStudentProfile(studentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/students/${studentId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching student profile:', error);
        return null;
    }
}

// Function to get all students
export async function getAllStudents() {
    try {
        const response = await fetch(`${API_BASE_URL}/students`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching students:', error);
        return [];
    }
}

// Function to get all teachers
export async function getAllTeachers() {
    try {
        const response = await fetch(`${API_BASE_URL}/teachers`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching teachers:', error);
        return [];
    }
}

// Function to get all classes
export async function getAllClasses() {
    try {
        const response = await fetch(`${API_BASE_URL}/classes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching classes:', error);
        return [];
    }
}

// Function to track attendance
export async function trackAttendance(attendanceData) {
    try {
        const response = await fetch(`${API_BASE_URL}/attendance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attendanceData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error tracking attendance:', error);
        return null;
    }
}

// Function to manage grades
export async function manageGrades(gradesData) {
    try {
        const response = await fetch(`${API_BASE_URL}/grades`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gradesData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error managing grades:', error);
        return null;
    }
}
