
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('user',(table)=>{
        table.increments('user_id').primary();
        table.string('name',255).notNullable;
        table.string('last_name',255);
        table.string('email',255).notNullable;
        table.string('phone',255).notNullable;
        table.text('description');
        table.boolean('active').defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
  
};
