const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Sprint Default Route</h1>')
})

module.exports = server;