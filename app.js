'use strict'
// require('dotenv').config()
let moduleLoader = require('esm')(module)
module.exports = moduleLoader('./backend/index')

// require('babel-polyfill')
// require('babel-register')
// import dotenv from 'dotenv'
// import src from './backend/index.js'
/**
 * запускаем сервер
 * @type {string|number}
 */
//dotenv.config()
//const port = process.env.PORT || 8080
// const src = './backend/index'
// const app = src.default
// const server = app.listen(port)
// console.log('Server running at ' + port)
// console.log('Running in ' + process.env.NODE_ENV + ' v-' + process.env.npm_package_version)
//  module.exports = { server: server }
// export default server
