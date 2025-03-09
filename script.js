const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to receive C code and compile it
app.post('/compile', (req, res) => {
    const cCode = req.body.code;
    const filePath = path.join(__dirname, 'program.c');

    // Write the received C code to a file
    fs.writeFileSync(filePath, cCode);

    // Compile the C code using GCC and execute it
    exec(`gcc ${filePath} -o program && ./program`, (err, stdout, stderr) => {
        if (err) {
            // If there's a compilation error
            res.status(500).json({ result: `Compilation error: ${stderr}` });
            return;
        }
        // Return the result of the program's execution
        res.json({ result: stdout });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
