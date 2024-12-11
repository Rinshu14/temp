// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Simple route to return a greeting message
app.get('/', (req, res) => {
  res.send('Hello, welcome to my Node.js app!');
});

// Route to handle the "/goodbye" path
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, see you next time!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
