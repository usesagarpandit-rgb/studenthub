const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
// Yeh line tumhari HTML file ko browser par bhejegi
app.use(express.static('public')); 

// Temporary
let students = [];
let idCounter = 1;

// GET: All Students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// POST: Add Student
app.post('/api/students', (req, res) => {
  const newStudent = { id: idCounter++, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// DELETE: Remove Student
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: 'Deleted successfully' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});