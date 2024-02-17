const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const os = require('os');
const path = require('path');

const app = express();
const PORT = 8086;

// Middleware to parse JSON and URL encoded data
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));


// A middleware to check headers
app.use((req, res, next) => {
    const contentType = req.header('Content-Type');
    const automationName = req.header('automation-name');
    const automationId = req.header('automation-id');
    const sessionId = req.header('session-id');

    if (!contentType || !automationName || !automationId || !sessionId) {
        return res.status(400).send("Missing required headers");
    }

    if ((contentType !== 'application/json' && contentType !== 'multipart/encoded') || 
         !automationName || 
         !automationId || 
         !sessionId) {
        return res.status(400).send("Invalid headers value");
    }

    next();
});

app.post('/healthdata', (req, res) => {
    processData(req.body);
    res.send('Data received and forwarded for processing.');
});

function processData(data) {
    console.log("export data", data);

    const filePath = path.join(os.homedir(), 'Documents/obsidian/Blue Dreams/Me/Health/applehealth.json');

    const dataString = JSON.stringify(data, null, 2);

    fs.writeFile(filePath, dataString, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data saved to ${filePath}`);
        }
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
