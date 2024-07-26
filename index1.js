// Import the express module
import express from 'express';

// Create an instance of express
const app = express();

// Define the port number the server will listen on
const PORT = 3000;

// Define a route for the root URL (http://localhost:3000/)
// The callback function takes two parameters: req (the request object) and res (the response object)
app.get('/', (req, res) => {
    // Send an HTML response with the group name
    res.send('<h1>Group Name: Group6</h1>');
});

// Start the server and have it listen on the defined port
// The callback function is executed once the server starts successfully
app.listen(PORT, () => {
    // Log a message to the console indicating that the server is running and listening on the specified port
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
