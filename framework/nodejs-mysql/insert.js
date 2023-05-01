const db = require("./db_config");

const sql = "INSERT INTO `profil-mahasiswa` (`id`, `nama`, `kelas`, `umur`, `kota`) VALUES (NULL, \'jaya\', \'tplm003\', \'20\', \'tangerang\');";

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});