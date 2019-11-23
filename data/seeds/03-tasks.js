
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([{
        task_description: "ut erat id mauris vulputate",
        notes: "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        completed: false,
        project_id: 3
      }, {
        task_description: "vel lectus",
        notes: "Nunc purus.",
        completed: false,
        project_id: 3
      }, {
        task_description: "ultrices posuere cubilia curae",
        notes: "Pellentesque viverra pede ac diam.",
        completed: false,
        project_id: 2
      }, {
        task_description: "sed magna at nunc commodo",
        notes: "Duis mattis egestas metus.",
        completed: false,
        project_id: 1
      }, {
        task_description: "mi in porttitor pede justo",
        notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        completed: true,
        project_id: 3
      }, {
        task_description: "pede venenatis non sodales sed",
        notes: "Proin interdum mauris non ligula pellentesque ultrices.",
        completed: false,
        project_id: 1
      }, {
        task_description: "a nibh",
        notes: "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        completed: true,
        project_id: 1
      }, {
        task_description: "nulla suscipit ligula in",
        notes: "Vestibulum sed magna at nunc commodo placerat.",
        completed: false,
        project_id: 3
      }, {
        task_description: "in est risus auctor",
        notes: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        completed: false,
        project_id: 2
      }, {
        task_description: "nunc commodo placerat praesent blandit",
        notes: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        completed: true,
        project_id: 1
      }, {
        task_description: "sit amet sapien dignissim vestibulum",
        notes: "Praesent lectus.",
        completed: true,
        project_id: 2
      }, {
        task_description: "primis in faucibus orci",
        notes: "Sed sagittis.",
        completed: true,
        project_id: 2
      }, {
        task_description: "nulla sed accumsan felis",
        notes: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        completed: false,
        project_id: 1
      }, {
        task_description: "vitae nisl",
        notes: "Integer ac leo.",
        completed: false,
        project_id: 1
      }, {
        task_description: "ridiculus mus vivamus",
        notes: "Duis mattis egestas metus. Aenean fermentum.",
        completed: true,
        project_id: 1
      }, {
        task_description: "rutrum ac",
        notes: "Mauris ullamcorper purus sit amet nulla.",
        completed: true,
        project_id: 2
      }, {
        task_description: "purus eu",
        notes: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        completed: false,
        project_id: 1
      }, {
        task_description: "sed tincidunt eu felis",
        notes: "Ut tellus.",
        completed: true,
        project_id: 3
      }, {
        task_description: "maecenas pulvinar",
        notes: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        completed: false,
        project_id: 3
      }, {
        task_description: "tortor duis mattis egestas",
        notes: "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        completed: false,
        project_id: 2
      }]);
};
