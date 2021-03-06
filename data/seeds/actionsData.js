exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'Inital setup',
          notes: 'Add dependencies etc.',
          completed: true,
          project_id: 1,
        },
        {
          description: 'Migrate database',
          notes: 'Use that migrate stuff',
          completed: false,
          project_id: 1,
        },
        {
          description: 'Get some coffee',
          notes: 'Got to get the work juice flowing',
          completed: true,
          project_id: 3,
        },
      ]);
    });
};
