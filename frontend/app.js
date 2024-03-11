const express = require('express');
const path = require("path"); // Node.js module for working with file paths
const app = express();
const port = 3000;


// Serve static files (like HTML) from the public folder
app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
  res.sendFile(path.join('public', 'index.html'));
  // 'C:', 'Users', 'user', 'Desktop', 'CloudProject', 
});

// Route to serve the about.html page
app.get('/index', (req, res) => {
  res.sendFile('public', 'main.html');
  // res.sendFile(path.join('C:', 'Users', 'user', 'Desktop', 'CloudProject', 'public', 'index.html'));
});

app.get('/main', (req, res) => {
  res.sendFile(path.join('public', 'main.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join('public', 'profile.html'));
});

app.get('/profile/editprofile', (req, res) => {
  res.sendFile(path.join('public', 'Edit-profile.html'));
});

app.get('/post', (req, res) => {
  res.sendFile(path.join('public', 'postpage.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
