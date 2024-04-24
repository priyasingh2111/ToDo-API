const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Import and use task routes
const taskRoutes = require('./crud'); 
app.use('/api', taskRoutes);

// Define a basic root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List API'); // Optional but helpful
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
