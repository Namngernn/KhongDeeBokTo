const express = require('express');
const path = require('path'); // Node.js module for working with file paths
const app = express();
const port = 3000;

// Serve static files (like HTML) from the public folder
app.use(express.static(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'index.html'));
});

// Route to serve the about.html page
app.get('/index', (req, res) => {
  // Use path.join to get the correct file path on any operating system
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'index.html'));
});

app.get('/main', (req, res) => {
  // Use path.join to get the correct file path on any operating system
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'main.html'));
});

app.get('/profile', (req, res) => {
  // Use path.join to get the correct file path on any operating system
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'profile.html'));
});

app.get('/profile/editprofile', (req, res) => {
  // Use path.join to get the correct file path on any operating system
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'Edit-profile.html'));
});

app.get('/post', (req, res) => {
  // Use path.join to get the correct file path on any operating system
  res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'postpage.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
