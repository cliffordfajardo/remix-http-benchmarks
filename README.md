# Remix HTTP Benchmarks

This repo is a testing playground for Remix Servers.


## Getting started:
First you'll need to get a postgres database running. The scripts in this repository make it fairly easily to get one up and running.

1. Follow the instructions in [`./docs/sql-development.md`](./docs/sql-development.md)
2. Once your postgres server is running, run the following scripts:

```sh
# run this from the root of project
# this will install the right nodejs version to use on your machine using `volta`
npm run setup
```

Next setup fill the database with our mock data:

```sh
# run this from the root of project
npm run setup-database
```

## Starting the apps

1. To start `remix-app-server-app`

```sh
cd remix-app-server-app
npm install && npm run build && npm start

# now you should be able to visit a route such as http://localhost:3000/small-json-payload
```

2. To start `remix-app-server-app`

```sh
cd expressjs-app
npm install && npm start

# now you should be able to visit a route such as http://localhost:3000/small-json-payload
```

## Getting Started
Read [./docs/sql-development.md]