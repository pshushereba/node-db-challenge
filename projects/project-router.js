const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// retrieving a list of projects.
router.get('/', (req, res) => {
    Projects.getAllProjects()
        .then((projects) => {
            const changedCompleted = [...projects].map( project => {
                project.completed = Boolean(project.completed);
                return project;
              });
            
            res.status(200).json(changedCompleted);
        })
        .catch((err) => {
            res.status(500).json({message: "There was an error retrieving the projects"})
        })
})

// adding projects.
router.post('/', (req, res) => {
    const projectInfo = req.body;
    Projects.addProject(projectInfo)
        .then((newProject) => {
            res.status(201).json(newProject)
        })
        .catch((err) => {
            res.status(500).json({message: "Failed to create new project"});
        });
});

// adding resources.

router.post('/resources', (req, res) => {
    const resourceInfo = req.body;
    Projects.addResource(resourceInfo)
        .then((newResource) => {
            res.status(201).json(newResource)
        })
        .catch((err) => {
            res.status(500).json({message: "Failed to create new resource."});
        });
});


// retrieving a list of resources.
router.get('/resources', (req, res) => {
    Projects.getAllResources()
        .then((resources) => {
            res.status(200).json(resources);
        })
        .catch((err) => {
            res.status(500).json({message: "There was an error retrieving the resources"})
        })
})

// adding tasks.

router.post('/:id/tasks', (req, res) => {
    const {id} = req.params;
    const newTask = req.body;
    newTask.project_id = id;

    Projects.addTask(id, newTask)
        .then((id) => {
            res.status(201).json(id)
        })
        .catch((err) => res.status(500).json({ message: 'Failed to add task' }))
})

// retrieving a list of tasks.

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.getTasks(id)
        .then((tasks) => {
            const changedCompleted = [...tasks].map( task => {
                task.completed = Boolean(task.completed);
                return task;
              });
            
            res.status(200).json(changedCompleted);
        })
        .catch((err) => {
            res.status(500).json({message: "There was an error retrieving the tasks"})
        })
})

module.exports = router;