const  knex = require("../models/Home");

class createModelKnex{
    constructor(knex, table, returningData, table_id){
        this.knex =knex;
        this.table =table;
        this.returningData= returningData;
        this.table_id=table_id
    }
    create = (bodyHome) => {
        // Crear un registro en la tabla HOMES
        return this.knex
        .insert(bodyHome)
        .returning(this.returningData)
        .into(this.table)
    };
    findAll = () => {
        return this.knex.select(this.returningData).from(this.table)
    }
    findOne = (id)=>{
        return this.knex.select(this.returningData).from(this.table).where({[this.table_id]: id})
    }
    find=(query)=>{
        return this.knex.select(this.returningData).from(this.table).where({[this.table_id]: id})
    }
    
    update =(id, bodyToUpdate)=>{
        return this.knex.update(bodyToUpdate)
        .from(this.table)
        .where({[this.table_id]:id})
        .returning(this.returningData);
    }
    
    destroy =(id)=>{
        return knex.del().from(this.table).where({[this.table_id]:id})
    }
    
    dilit =(id)=>{
        return knex.update({active:false})
        .from(this.table)
        .where({[thhis.table_id]:id})
    }
    
}


module.exports =createModelKnex;