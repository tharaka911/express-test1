// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init()

require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});