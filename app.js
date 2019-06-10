'use strict'

let moduleLoader = require('esm')(module)
module.exports = moduleLoader('./backend/index')
