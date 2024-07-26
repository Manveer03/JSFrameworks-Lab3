// Import the express module
import express from 'express';

// Import the JSON data from the mock-data.json file
// The 'assert { type: 'json' }' is used to ensure the module is treated as JSON
import data from './data/mock-data.json' assert { type: 'json' };

// Create an instance of express
const app = express();

// Define the port number the server will listen on
const PORT = 3000;

// Define a route for the URL /students (http://localhost:3000/students)
// The callback function takes two parameters: req (the request object) and res (the response object)
app.get('/students', (req, res) => {
    // Send the JSON data as the response
    res.json(data);
});

// Start the server and have it listen on the defined port
// The callback function is executed once the server starts successfully
app.listen(PORT, () => {
    // Log a message to the console indicating that the server is running and listening on the specified port
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
