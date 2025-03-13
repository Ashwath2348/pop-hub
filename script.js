const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to compile C code
app.post('/compile', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).send({ error: 'No code provided' });
    }

    // Save code to a temporary file
    const fs = require('fs');
    const filePath = './temp_code.c';

    fs.writeFileSync(filePath, code, 'utf8');

    // Compile the C code using gcc
    function compileC() {
    const code = document.getElementById("editor").value;
    const encodedCode = encodeURIComponent(code);
    const programizUrl = `https://www.programiz.com/c-programming/online-compiler/?code=${encodedCode}`;
    
    window.open(programizUrl, "_blank");
    }

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
