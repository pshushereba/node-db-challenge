
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: "ipsum aliquam non mauris morbi",
          resource_description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
        }, {
          resource_name: "morbi odio odio elementum eu",
          resource_description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
        }, {
          resource_name: "tincidunt ante vel ipsum",
          resource_description: "Aenean lectus. Pellentesque eget nunc."
        }, {
          resource_name: "orci luctus et ultrices posuere",
          resource_description: "Integer ac leo."
        }, {
          resource_name: "tempus vel pede",
          resource_description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
        }, {
          resource_name: "morbi sem mauris laoreet",
          resource_description: "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
        }, {
          resource_name: "sed augue aliquam",
          resource_description: "Mauris sit amet eros."
        }, {
          resource_name: "consequat morbi a ipsum",
          resource_description: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
        }, {
          resource_name: "semper est quam pharetra",
          resource_description: "Nam dui."
        }, {
          resource_name: "primis in faucibus orci luctus",
          resource_description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        }
      ]);
};
