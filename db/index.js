let mysql = require('mysql');
const uuidv1 = require('uuid/v1');

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

 export const selectAll = (table) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM " + table + ";"
    con.query(sql, (err, results) => {
    console.log(results);
      if (err) reject(err);
      resolve(results);
    });
  });
};

// export {
//   selectAll
// }

export const createAdvertisers=({adv_userID,adv_identifier})=>{
    const id = uuidv1()
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO advertisers("+
        "adv_id, "+
        "adv_userID,"+
        "adv_identifier) VALUES"
        +"('" +
        id + "','" + adv_userID + "','" + adv_identifier + "');"

    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve({
        adv_id: id,
        adv_userID: adv_userID,
        adv_identifier: adv_identifier
      });
    });
});
}

export const createAds=({ad_advertiserPrice,ad_productPrice,ad_content,ad_title,ad_advertiserID})=>{
    const id = uuidv1()
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO ads("+
        "ad_id, "+
        "ad_advertiserPrice,"+
        "ad_productPrice,"+
        "ad_content,"+
        "ad_title,"+
        "ad_advertiserID )VALUES"+
        "('" +
        id + "','" + ad_advertiserPrice + "','" + ad_productPrice + "','"
         + ad_content + "','" + ad_title + "','" + ad_advertiserID + "');"
         console.log(sql)
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve({
        ad_id: id,
        ad_advertiserPrice: ad_advertiserPrice,
        ad_productPrice: ad_productPrice,
        ad_content:ad_content,
        ad_title:ad_title,
        ad_advertiserID:ad_advertiserID
      });
    });
});
}
