const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getAllProjects()
        .then((projects) => {
            res.status(200).json(projects);
        })
        .catch((err) => {
            res.status(500).json({message: "There was an error retrieving the projects"})
        })
})

module.exports = router;