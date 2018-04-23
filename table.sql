
DROP TABLE IF EXISTS advertisers,ads;

CREATE TABLE IF NOT EXISTS advertisers(
  adv_id INT NOT NULL AUTO_INCREMENT,
  adv_userID INT NOT NULL,
  adv_identifier INT NOT NULL,
  PRIMARY KEY (adv_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS ads (
  ad_id INT NOT NULL AUTO_INCREMENT,
  ad_advertiserPrice INT DEFAULT NULL,
  ad_productPrice INT NOT NULL,
  ad_content varchar(200),
  ad_title varchar(200),
  ad_advertiserID INT NOT NULL,
  PRIMARY KEY (ad_id),
  FOREIGN KEY (ad_advertiserID) REFERENCES advertisers(adv_id)
) ENGINE=InnoDB;
