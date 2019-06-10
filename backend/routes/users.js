import UsersController from '../controllers/UsersController.js'
import Router from 'koa-router'
import send from 'koa-send'

const router = new Router()
const usersController = new UsersController()
/**
 * здесь мы прописывает роуты запросов
 */
router.get('/users/', async (ctx, next) => {
  await usersController.index(ctx)
})
router.get('/', async (ctx, next) => {

  send(ctx, ctx.path, {
    root: './dist',
    immutable: true
  })
})
router.post('/signup', async (ctx, next) => {
  await usersController.signup(ctx)
})
router.post('/login', async (ctx, next) => {
  await usersController.login(ctx, next)
})
export default router
