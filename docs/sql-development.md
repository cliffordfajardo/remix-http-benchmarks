# SQL Development

## Installing Postgres
Before you can run the postgre database you need to install `postgresql` on your computer.

If you’re using a Mac, this tutorial assumes you have `homebrew` installed on your computer as a package manager for installing new programs. If you don’t, simply click on the link and follow the instructions. Open up the Terminal and install postgresql with brew:


```
brew install postgresql
```


You may see instructions on the web reading brew install postgres instead of postgresql; both options will install PostgreSQL on your computer.
After the installation is complete, we’ll want to get postgresql up and running, which we can do with services start:


## Starting Postgres database server

To start Postgres, run the following command:

```
brew services start postgresql
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```

If at any point you want to stop the postgresql service, you can run:

```
brew services stop postgresql
```


## Create and Populate Postgres Database
Once your postgres server is running (`brew services start postgresql`), we will need to create tables and populate the database with our data.
Run the following command below to setup the database:

```
./scripts/init_db.py
```

If this command is successfull, your database will have a table with data that can be queries.
To view your database data, you can download this graphical database app: https://dbgate.org/ OR use the command line tools postgres provides to query your database.




## References
- https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
- https://dbgate.org/