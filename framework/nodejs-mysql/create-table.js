const db = require("./db_config");

const sql = `CREATE TABLE customers 
    (
        id int NOT NULL AUTO_INCREMENT,
        nama VARCHAR(255), 
        kelas VARCHAR(255),
        umur int (150),
        kota VARCHAR(255),
        PRIMARY KEY (id)
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});