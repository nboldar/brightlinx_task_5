'use strict'
/**
 * точка входа приложения, основная задача этого кода загрузка модулей
 */
let moduleLoader = require('esm')(module)
module.exports = moduleLoader('./backend/index')
