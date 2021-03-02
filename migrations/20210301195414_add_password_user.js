
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('user',(table)=>{
        table.string('password', 255).nullable();
        table.string('rol').nullable();
    });
};

exports.down = function(knex) {
  
};
