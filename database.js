const pgp = require('pg-promise')();

let connection = process.env.DATABASE_URL || `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`

const db = pgp(connection);

module.exports = db;

