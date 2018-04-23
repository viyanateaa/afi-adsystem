
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


INSERT INTO advertisers (adv_userID,adv_identifier) VALUES
(1,0),
(2,1);

INSERT INTO ads(ad_advertiserPrice,ad_productPrice,ad_content,ad_title,ad_advertiserID) VALUES
(0,100,'mug','mug AD',1),
(40,100,'mug','mug AD',2);
