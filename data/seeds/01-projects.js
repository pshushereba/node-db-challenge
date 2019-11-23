
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: "odio consequat varius integer ac",
      description: "Integer non velit.",
      completed: true
    }, {
      project_name: "maecenas ut massa quis",
      description: "Nulla justo.",
      completed: true
    }, {
      project_name: "duis at velit eu est",
      description: "Suspendisse potenti.",
      completed: false
    }
  ]);
};
