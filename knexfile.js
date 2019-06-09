// Update with your config settings.
require('dotenv').config()
const env = process.env
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: env.DB_DATABASE,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      port: env.DB_PORT,
      host: env.DB_HOST
    },

    migrations: {
      directory: './backend/db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: env.DB_DATABASE,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      port: env.DB_PORT,
      host: env.DB_HOST
    },

    migrations: {
      directory: './backend/db/migrations'
    }
  }

}
