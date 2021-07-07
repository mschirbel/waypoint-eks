const { Pool } = require('pg');
const { createDb, migrate } = require("postgres-migrations")

createDb("database-name", {
  defaultDatabase: "stocks",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  host: process.env.DB_DNS,
  port: 5432,
})
.then(() => {
  return migrate({
    database: "stocks",
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    host: process.env.DB_DNS,
    port: 5432,
  }, "src/config/migrations")
})
.then(() => {
  console.log('Migrations applied')
})
.catch((err) => {
  console.log(err)
})

const conn = `postgres://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_DNS}:5432/stocks`

const pool = new Pool({
  connectionString: conn
});

pool.on('connect', () => {
  console.log('Database Connected');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
