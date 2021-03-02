const knex = require('../config');

const createModelsUtil = require('../utils/createModelsUtil');

const TABLE= 'user';
const RETURNING_DATA = ['user_id','name','last_name','email','phone','description','active', 'created_at'];
const TABLE_ID = 'user_id'

const userModel = new createModelsUtil(knex, TABLE,RETURNING_DATA, TABLE_ID);

module.exports = userModel;