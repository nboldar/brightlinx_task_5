let environment = 'production';
let config = require('../../knexfile')[environment];
/**
 * сущность, которая работает с запросами к базе данных
 */
module.exports = require('knex')(config);
