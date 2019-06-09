import UsersController from '../controllers/UsersController';
import Router from 'koa-router';

const router = new Router();
const usersController = new UsersController();
/**
 * здесь мы прописывает роуты запросов
 */
router.get('/users/', async (ctx, next) => {
   await usersController.index(ctx);
});
router.get('/', async (ctx, next) => {
    ctx.body = {message: 'Hi there. ' + process.env.npm_package_version};
});
router.post('/signup', async (ctx,next)=>{
   await  usersController.signup(ctx);
});
router.post('/login', async (ctx,next)=>{
    await  usersController.login(ctx,next);
});
export default router;
