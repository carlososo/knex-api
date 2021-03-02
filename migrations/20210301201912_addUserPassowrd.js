exports.up = function(knex) {
    return knex.schema.table('user',(table) =>{
        table.string('password').nullable()
        table.string('rol').nullable()
    })
  };

exports.down = function(knex) {
  
};
