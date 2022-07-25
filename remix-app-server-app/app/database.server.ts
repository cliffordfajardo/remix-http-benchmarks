import { Pool } from "pg";

let client: Pool;

declare global {
  var __db: Pool | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either. Details: https://remix.run/docs/en/v1/tutorials/jokes#connect-to-the-database
if (process.env.NODE_ENV === "production") {
  client = new Pool({
    database: "my_db",
    host: "localhost",
    user: "my_db_user",
    password: "password",
    port: 5432, // This is the default port for PostgreSQL
  });
} else {
  if (!global.__db) {
    global.__db = client = new Pool({
      database: "my_db",
      host: "localhost",
      user: "my_db_user",
      password: "password",
      port: 5432, // This is the default port for PostgreSQL
    });
  }
  client = global.__db;
}

export function getDB() {
  return client;
}
