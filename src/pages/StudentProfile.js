import React, { useState, useEffect } from 'react';
import { getStudentProfile } from '../services/api';

function StudentProfile({ studentId }) {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        async function fetchStudentProfile() {
            const data = await getStudentProfile(studentId);
            setStudent(data);
        }
        fetchStudentProfile();
    }, [studentId]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Student Profile</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Email:</strong> {student.email}</p>
        </div>
    );
}

export default StudentProfile;
