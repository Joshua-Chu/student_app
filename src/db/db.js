const Pool = require("pg").Pool;
const CONFIGS = require("./configs").CONFIGS;

const pool = new Pool(
  process.env.NODE_ENV !== "production"
    ? {
        user: CONFIGS.user,
        host: CONFIGS.host,
        database: CONFIGS.database,
        password: CONFIGS.password,
        port: CONFIGS.port,
      }
    : { connectionString: CONFIGS.connectionString }
);

module.exports = {
  pool,
};
