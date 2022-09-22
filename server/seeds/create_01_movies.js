/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Mean Girls', description: 'Movie about mean high school girls', watched: true},
    {id: 2, title: 'Hackers', description: 'Movie about the Galvanize Cohort', watched: false},
    {id: 3, title: 'The Grey', description: 'When the world is not black or white', watched: false},
    {id: 4, title: 'Sunshine', description: 'Certainly not nighttime', watched: false},
    {id: 5, title: 'Ex Machina', description: 'Revenge of the machines', watched: false}
  ]);
};

// {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},