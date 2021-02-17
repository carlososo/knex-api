
exports.up = function(knex) {
    return knex.schema.createTable('homes', (table)=>{
        table.increments('house_id');
        table.string('house_name',255).notNullable;
        table.text('description');
        table.integer('guests').notNullable();
        table.text('address').notNullable();
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
    
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('homes');
  };
  