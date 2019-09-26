// Set up MySQL connection.
const mysql = require("mysql");
let  connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else if (process.env.CLEARDB_DATABASE_URL) {
  
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
  // connection = mysql.createConnection({
  //   host: "us-cdbr-iron-east-02.cleardb.net",  
  //   user: "bbb262ca1e5e65",
  //   password: "b9fc5273",
  //   database: "heroku_295aff39c7aec8e"
  // });

}
else {

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "test",
    database: "burgers_db"
  });

}


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
