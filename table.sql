
DROP TABLE IF EXISTS advertisers,ads;

CREATE TABLE IF NOT EXISTS advertisers(
  adv_id char(36) NOT NULL UNIQUE,
  adv_userID INT NOT NULL,
  adv_identifier INT NOT NULL,
  PRIMARY KEY (adv_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS ads (
  ad_id char(36) NOT NULL UNIQUE,
  ad_advertiserPrice INT DEFAULT NULL,
  ad_productPrice INT NOT NULL,
  ad_content varchar(200),
  ad_title varchar(200),
  ad_advertiserID char(36),
  PRIMARY KEY (ad_id),
  FOREIGN KEY (ad_advertiserID) REFERENCES advertisers(adv_id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO advertisers (adv_id,adv_userID,adv_identifier) VALUES
('f64f2940-fae4-11e7-8b5f-cf21356s5563',1,0),
('f44f2940-aae4-15e6-9u5f-wf389f279131',2,1);

INSERT INTO ads(ad_id,ad_advertiserPrice,ad_productPrice,ad_content,ad_title,ad_advertiserID) VALUES
('f55f2940-xde4-12e8-1a2f-ef356f279131',0,100,'mug','mug AD','f64f2940-fae4-11e7-8b5f-cf21356s5563'),
('630eb68f-e0fa-5ecc-887a-7c7a62614681',40,100,'mug','mug AD','f44f2940-aae4-15e6-9u5f-wf389f279131');
