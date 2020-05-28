const mysql = require("mysql");
const util = require("util");

if(process.env.JAWSDB_URL){
	const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) {
    console.log(`Error in connection ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;

