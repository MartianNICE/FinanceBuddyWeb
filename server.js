const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the blogs page
app.get('/blogs', (req, res) => {
  res.sendFile(__dirname + '/blogs.html');
});

// Route for the calculator page
app.get('/calculators', (req, res) => {
  res.sendFile(__dirname + '/calculator.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
