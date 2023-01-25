const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.PGURI,
});

module.exports = {
  pool,
};
