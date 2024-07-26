// Import the express module
import express from 'express';

// Import the JSON data from the mock-data.json file
// The 'assert { type: 'json' }' is used to ensure the module is treated as JSON
import data from './data/mock-data.json' assert { type: 'json' };

// Create an instance of express
const app = express();

// Define the port number the server will listen on
const PORT = 3000;

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Define a route for the URL /students (http://localhost:3000/students)
// The callback function takes two parameters: req (the request object) and res (the response object)
app.get('/students', (req, res) => {
    // Send the JSON data as the response
    res.json(data);
});

// Example data for post, put, delete operations
let students = [...data];

// Create - POST
// URL: http://localhost:3000/students
// Adds a new student to the students array
app.post('/students', (req, res) => {
    const newStudent = req.body; // Get the new student data from the request body
    students.push(newStudent); // Add the new student to the array
    res.status(201).json(newStudent); // Send a response with the status code 201 (Created) and the new student data
});

// Update - PUT
// URL: http://localhost:3000/students/:id
// Updates an existing student in the students array based on the provided ID
app.put('/students/:id', (req, res) => {
    const { id } = req.params; // Get the student ID from the URL parameters
    const updatedStudent = req.body; // Get the updated student data from the request body
    students = students.map(student => student.id == id ? updatedStudent : student); // Update the student data in the array
    res.json(updatedStudent); // Send a response with the updated student data
});

// Delete - DELETE
// URL: http://localhost:3000/students/:id
// Deletes an existing student from the students array based on the provided ID
app.delete('/students/:id', (req, res) => {
    const { id } = req.params; // Get the student ID from the URL parameters
    students = students.filter(student => student.id != id); // Remove the student from the array
    res.status(204).send(); // Send a response with the status code 204 (No Content)
});

// Start the server and have it listen on the defined port
// The callback function is executed once the server starts successfully
app.listen(PORT, () => {
    // Log a message to the console indicating that the server is running and listening on the specified port
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
