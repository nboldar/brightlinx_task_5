'use strict';
require('dotenv').config();
require('babel-polyfill');
require('babel-register');
/**
 * запускаем сервер
 * @type {string|number}
 */
const port = process.env.PORT || 4040;
const src = './backend/index';
const app = require(src).default;
const server = app.listen(port);
console.log('Server running at ' + port);
console.log("Running in " + process.env.NODE_ENV + " v-" + process.env.npm_package_version);
module.exports = {server: server};