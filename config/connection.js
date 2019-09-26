// Set up MySQL connection.
const mysql = require("mysql");

const localconnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "test",
  database: "burgers_db"
});

const connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "bbb262ca1e5e65",
  password: "b9fc5273",
  database: "heroku_295aff39c7aec8e"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
