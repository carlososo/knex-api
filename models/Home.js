// Trae los datos de la base de datos
// Conectarme a la base de datos
const knex = require('../config');
const createModelsUtil = require('../utils/createModelsUtil');

const TABLE = 'homes';
const RETURNING_DATA = ['house_name','house_id','address','details','user_id', 'created_at'];
const TABLE_ID = 'house_id'

const HomeModel = new createModelsUtil(knex, TABLE, RETURNING_DATA,TABLE_ID);

HomeModel.findOnewithUser =(house_id)=>{
    return knex.select(['homes.house_id','homes.house_name','user.user_id','homes.address','user.name']).from(TABLE).join('user','user.user_id','=','homes.user_id').where({[TABLE_ID]: house_id})
}

module.exports = HomeModel;