'use strict'

import Koa from 'koa'
import router from './routes/users'
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
import send from 'koa-static'
import dotenv from 'dotenv'
import mount from 'koa-mount'

/**
 * инициация приложения
 * @type {Application<any, {}>}
 */
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const app = new Koa()
const port = process.env.PORT || 8080

app.use(cors({
  origin: '*'
}))
app.use(bodyParser({ enableTypes: ['json'] }))
app.use(router.routes())
app.use(mount('/', send('./dist')))

const server = app.listen(port)
console.log('Server running at ' + port)
console.log('Running in ' + process.env.NODE_ENV + ' v-' + process.env.npm_package_version)
export default server
