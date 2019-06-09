import User from '../models/User';

/**
 * класс-контроллер связывает запрос от клиента на предоставление данных по сущностям User, c моделью которая эти данные отдает
 */
export default class UsersController {

    async index(ctx) {
        const query = ctx.query;
        const user = new User();
        try {
            let result = await user.getAll(query);
            ctx.body = result;
        } catch (error) {
            ctx.throw(400, 'INVALID_DATA' + error);
        }
    }

    async signup(ctx) {

        const user = new User();

        try {
            let user_id = await user.addUser(ctx.request.body);
            ctx.body = {isRegistered: true, user_id: user_id[0]};
        } catch (error) {
            ctx.throw(400, 'INVALID_DATA' + error);
        }

    }

    async login(ctx) {

        const user = new User();
        try {
            let response = await user.login(ctx.request.body);
            ctx.body = {isAuthorized: response};
        } catch (error) {
            ctx.throw(400, 'INVALID_DATA' + error);
        }
    }
}
