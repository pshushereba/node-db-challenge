const db = require('../data/db-config.js');

function getAllProjects() {
    return db('projects');
}

function getProject(id) {
    return db('projects').where({id: id});
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

async function addTask(id, task) {
    const project = await getProject(id);
    if(project.length === 0) {
      return [];
    } else {
      return db('tasks')
        .insert(task);
    }
  }

module.exports = {
    getAllProjects,
    addProject,
    getAllResources,
    addResource,
    getTasks,
    getProject,
    addTask
};