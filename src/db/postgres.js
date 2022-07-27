const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "topgunlab",
    password: "topgunlab",
    database: "topgunlab",
  });

  await client.connect();
  return client;
}

module.exports = { getConnection };
