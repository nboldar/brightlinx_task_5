import UsersController from '../controllers/UsersController.js'
import Router from 'koa-router'

const router = new Router()
const usersController = new UsersController()

/**
 * здесь мы прописывает роуты запросов
 */

router.redirect('/users', '/')
router.redirect('/login', '/')
router.redirect('/signup', '/')

router.get('/api/v1/users/', async (ctx, next) => {
  await usersController.index(ctx)
})

router.post('/api/v1/signup', async (ctx, next) => {
  await usersController.signup(ctx)
})
router.post('/api/v1/login', async (ctx, next) => {
  await usersController.login(ctx, next)
})
export default router
