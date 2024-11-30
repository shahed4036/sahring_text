// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());  // To parse JSON data
app.use(express.static('public'));  // Serve static files from the 'public' folder

let sharedText = '';  // Variable to store the shared text

// Endpoint to save text
app.post('/saveText', (req, res) => {
    sharedText = req.body.text;  // Save the text sent in the request body
    res.send({ message: 'Text saved successfully' });
});

// Endpoint to get the saved text
app.get('/getText', (req, res) => {
    res.json({ text: sharedText });  // Return the saved text
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
