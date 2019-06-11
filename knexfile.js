// файл конфигурации пакета для работы с базой данных

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './backend/db/migrations'
    }
  }

}
