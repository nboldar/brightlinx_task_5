
import Koa from 'koa'
import router from './routes/users'
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
import serveStatic from 'koa-static'
/**
 * инициация приложения
 * @type {Application<any, {}>}
 */

const app = new Koa()

app.use(cors({
  origin: 'http://localhost:8080'
}))
app.use(bodyParser({ enableTypes: ['json'] }))
app.use(router.routes())
app.use(serveStatic('../dist'))

export default app
