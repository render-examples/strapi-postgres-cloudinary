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
      acquireConnectionTimeout: 5000,
      pool: {
        min: 0,
        max: 10,
        createTimeoutMillis: 8000,
        acquireTimeoutMillis: 8000,
        idleTimeoutMillis: 8000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
      }
    },
  };
};
