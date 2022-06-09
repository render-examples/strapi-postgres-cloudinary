const path = require('path');
const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const DATABASE_URL = env('DATABASE_URL');
  if (!DATABASE_URL) {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      },
    }
  }

  const { host, port, database, user, password } = parse(DATABASE_URL);

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: env.bool('DB_CLIENT_DEBUG', false),
      pool: {
        min: 0,
        max: 10,
        acquireTimeoutMillis: 2000,
      }
    },
  };
};
