-- Insert initial data into Students table
INSERT INTO Students (name, age, grade, email) VALUES
('John Brown', 16, '10th Grade', 'john.Brown@example.com'),
('Jane Sugar', 15, '9th Grade', 'jane.sugar@example.com'),
('Alice Jack', 17, '11th Grade', 'alice.jack@example.com');

-- Insert initial data into Teachers table
INSERT INTO Teachers (name, age, subject, email, phone, address) VALUES
('Mr. Brown', 45, 'Mathematics', 'mr.brown@example.com', '123-456-7890', '123 Main St'),
('Ms. Green', 38, 'Science', 'ms.green@example.com', '987-654-3210', '456 Elm St'),
('Mrs. White', 50, 'English', 'mrs.white@example.com', '555-555-5555', '789 Oak St');

-- Insert initial data into Classes table
INSERT INTO Classes (name, teacher_id) VALUES
('Math 101', 1),
('Science 101', 2),
('English 101', 3);

-- Insert initial data into Attendance table
INSERT INTO Attendance (student_id, class_id, date, status) VALUES
(1, 1, '2025-03-01', 'Present'),
(2, 2, '2025-03-01', 'Absent'),
(3, 3, '2025-03-01', 'Present');

-- Insert initial data into Grades table
INSERT INTO Grades (student_id, class_id, grade) VALUES
(1, 1, 'A'),
(2, 2, 'B'),
(3, 3, 'A');
