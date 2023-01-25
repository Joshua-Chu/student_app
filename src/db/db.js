const Pool = require("pg").Pool;
const CONFIGS = require("./configs").CONFIGS;

const pool = new Pool({
  user: CONFIGS.user,
  host: CONFIGS.host,
  database: CONFIGS.database,
  password: CONFIGS.password,
  port: CONFIGS.port,
});

module.exports = {
  pool,
};
