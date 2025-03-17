import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <main>
            <h2>Dashboard</h2>
            <div className="dashboard-links">
                <Link to="/students">Manage Students</Link>
                <Link to="/teachers">Manage Teachers</Link>
                <Link to="/classes">Manage Classes</Link>
                <Link to="/attendance">Track Attendance</Link>
                <Link to="/grades">Manage Grades</Link>
            </div>
        </main>
    );
}

export default Dashboard;
