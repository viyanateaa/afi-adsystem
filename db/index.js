let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "afi-advertisers"
});


con.connect(function(err) {
  if (err) throw err;
});

const selectAll = (table) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM " + table + ";"
    con.query(sql, (err, results) => {
    console.log(results);
      if (err) reject(err);
      resolve(results);
    });
  });
};

export {
  selectAll
}
