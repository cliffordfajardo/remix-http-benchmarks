import 'zx/globals';
import postgres from 'pg';

const { Client } = postgres;
const Shell = $;
let smallJSONData = fs.readFileSync('../data/small-json-payload.json');
let mediumJSONData = fs.readFileSync('../data/medium-json-payload.json');
let largeJSONData = fs.readFileSync('../data/large-json-payload.json');


/**********************Setup Database *********************************** */
const DB_NAME = 'my_db';
const DB_USERNAME = "my_db_user";
const DB_HOST = 'localhost';
const DB_PASSWORD = "password";
const DB_PORT = 5432; // This is the default port for PostgreSQL
const JSON_PAYLOADS_TABLE_NAME = "json_payloads_table";


console.log("Make sure your postgres database is running (see sql-development.md instruction)");
const isPostgresDatabaseRunning = (await Shell`pg_isready -d ${DB_NAME} -h localhost -p ${DB_PORT} -U ${DB_USERNAME}`).toString().includes('accepting connections');

if(isPostgresDatabaseRunning){
  console.log(`✅ Postgres database ${DB_NAME} is running`);
}
else {
  console.log(`❌ Postgres database ${DB_NAME} is not running.`);
  console.log("Make sure your postgres database is running by following the instruction in sql-development.md");
}


console.log("Setting up Postgres Database");
console.log(`Dropping ${DB_NAME} database. If this hangs, run the following command: killall -9 psql`);

await Shell`dropdb ${DB_NAME} --if-exists`;

console.log(`Removing existing db user: ${DB_USERNAME}`);
await Shell`dropuser ${DB_USERNAME} --if-exists`;

console.log(`Creating database: ${DB_NAME}`)
await Shell`createdb ${DB_NAME}`;

console.log(`Creating database user: ${DB_USERNAME}`);
await Shell`psql template1 -c "CREATE user ${DB_USERNAME};"`
await Shell`psql template1 -c "ALTER user ${DB_USERNAME} password '${DB_PASSWORD}';"`

console.log("Assigning ownership of $DB_NAME database to ${DB_USERNAME}");
await Shell`psql template1 -c "GRANT ALL ON DATABASE ${DB_NAME} to ${DB_USERNAME};"`
await Shell`psql "${DB_NAME}" -c "GRANT ALL ON ALL tables IN SCHEMA public to ${DB_USERNAME}"`
await Shell`psql "${DB_NAME}" -c "GRANT ALL ON ALL tables IN SCHEMA public to ${DB_USERNAME}"`
await Shell`psql "${DB_NAME}" -c "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO ${DB_USERNAME}"`  // https://stackoverflow.com/questions/9325017/error-permission-denied-for-sequence-cities-id-seq-using-postgres

console.log(`dropping ${JSON_PAYLOADS_TABLE_NAME}`);
await Shell`psql template1 -c "DROP TABLE IF EXISTS ${JSON_PAYLOADS_TABLE_NAME};"`

console.log(`creating ${JSON_PAYLOADS_TABLE_NAME}`);
await Shell`psql template1 -c "CREATE TABLE ${JSON_PAYLOADS_TABLE_NAME} (
  id serial PRIMARY KEY,
  title varchar (150) NOT NULL,
  data json NOT NULL
);"
`;





/**********************Populate Database *********************************** */
const client = new Client({
  database: DB_NAME,
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT, 
})
await client.connect()
await client.query(`INSERT INTO ${JSON_PAYLOADS_TABLE_NAME} (title, data) VALUES ($1, $2)`, ['small', JSON.parse(smallJSONData)]);
await client.query(`INSERT INTO ${JSON_PAYLOADS_TABLE_NAME} (title, data) VALUES ($1, $2)`, ['medium', JSON.parse(mediumJSONData)]);
await client.query(`INSERT INTO ${JSON_PAYLOADS_TABLE_NAME} (title, data) VALUES ($1, $2)`, ['large', JSON.parse(largeJSONData)]);
await client.end()
