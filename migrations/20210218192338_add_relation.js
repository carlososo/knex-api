
exports.up = function(knex) {
    return knex.schema.table('homes',(table)=>{
        //hacer un rename de una columna
        table.renameColumn('description', 'details')
        //agregar una columna que sea FK
        table.integer('user_id').unsigned().references('user.user_id')
    })
  
};

exports.down = function(knex) {
  
};
