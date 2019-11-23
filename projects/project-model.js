const db = require('../data/db-config.js');

function getAllProjects() {
    return db('projects');
}

module.exports = {
    getAllProjects
};