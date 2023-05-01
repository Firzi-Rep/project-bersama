const db = require("./db_config");

const sql = "UPDATE `profil-mahasiswa` SET `nama` = \'Firzi\', `kota` = \'tangerang\' WHERE `profil-mahasiswa`.`id` = 2;";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});