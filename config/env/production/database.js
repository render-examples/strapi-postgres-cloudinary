const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      debug: false,
      pool: {
        min: 0,
        max: 10,
        // acquireTimeoutMillis: 2000,
        // createTimeoutMillis: 2000,
        // destroyTimeoutMillis: 5000,
        // idleTimeoutMillis: 2000,
        // reapIntervalMillis: 2000,
      }
    },
  };
};
