const db = require('../data/db-config.js');

function getAllProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects').insert(project)
        .then((res) => {
            const id = res[0]
            return db('projects').where({id: id});
        })
}

function getAllResources() {
    return db('resources');
}

function addResource(resource) {
    return db('resources').insert(resource)
    .then((res) => {
        const id = res[0]
        return db('resources').where({id: id});
    })
}

function getTasks(id) {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.id', 'projects.project_name', 'tasks.task_description', 'tasks.notes', 'tasks.completed')
    .where({ 'projects.id': id });
}

module.exports = {
    getAllProjects,
    addProject,
    getAllResources,
    addResource,
    getTasks
};