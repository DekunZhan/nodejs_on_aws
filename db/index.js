const { Pool } = require('pg')

// PORT = 3000
// PGUSER = postgres
// PGHOST = localhost
// PGPASSWORD = 123456abc
// PGDATABASE = dvdrental
// PGPORT = 5432

const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'dvdrental',
  // password: '123456abc',
  // port: 5432,
  user     : process.env.RDS_USERNAME,
  host     : process.env.RDS_HOSTNAME,
  database : process.env.RDS_DB_NAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
