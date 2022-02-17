const express = require('express');

const server = express();

const ProjectRouter = require('./projects/project-router.js');

server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send('<h1>Sprint Default Route</h1>')
})

module.exports = server;