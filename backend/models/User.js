import db from '../db/db';
import hashMaker from 'password-hash';

/**
 *
 * класс-модель сущности User
 */
export default class User {
    constructor(data) {
        if (!data) {
            return;
        }
        this.id = data.id;
        this.name = data.name;
        this.phone = data.phone;
        this.website = data.website;
    }

    async getAll(request) {

        try {
            return await db('users').select('*');

        } catch (error) {
            console.log(error);
            throw new Error('ERROR');
        }
    }

    async addUser(user) {
        try {

            return await db('users').insert([
                {
                    email: user.email,
                    password_hash: hashMaker.generate(user.password),
                },

            ]).returning('id');


        } catch (error) {
            console.log(error);
            throw new Error('ERROR');
        }
    }

    async getUserByEmail(email) {
        return await db('users').where({email: email});
    }

    async login(_user) {

        let data = await this.getUserByEmail(_user.email);
        let user = data[0];
        if (!user) {
            return false;
        }
        return hashMaker.verify(_user.password, user.password_hash);
    }

}
