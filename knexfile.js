// Update with your config settings.
require('dotenv').config()
const url = require('url')
const db_url = 'postgres://mbusgzhdejwcos:5c88eb9fce9053c4987b005b9d046eba84f6a3dba7ab6e2cc0a2543d04fd1f91@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d45u8l2nrsn7oi'
console.log(url.parse(db_url))
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
    //   {
    //   database: env.DB_DATABASE,
    //   user: env.DB_USER,
    //   password: env.DB_PASSWORD,
    //   port: env.DB_PORT,
    //   host: env.DB_HOST
    // },

    migrations: {
      directory: './backend/db/migrations'
    }
  }

}
