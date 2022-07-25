const { Pool } = require('pg')
const express = require('express')
const app = express()
const port = 3001

// connections string: postgres://{user}:{password}@{hostname}:{port}/{database-name}
const client = new Pool({
  user: 'my_db_user',
  host: 'localhost',
  database: 'my_db',
  password: 'password',
  port: 5432, // This is the default port for PostgreSQL
})

app.get('/', async (req, res) => {
  res.send("App is running")
})

app.get('/small-json-payload', async (req, res) => {
  const response = await (await client.query(`SELECT data from json_payloads_table
                Where title='small'`)).rows  
  res.send(response)
})

app.get('/medium-json-payload', async (req, res) => {
  const response = await (await client.query(`SELECT data from json_payloads_table
                Where title='medium'`)).rows  
  res.send(response)
})

app.get('/large-json-payload', async (req, res) => {
  const response = await (await client.query(`SELECT data from json_payloads_table
                Where title='large'`)).rows  
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})