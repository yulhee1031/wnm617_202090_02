CREATE TABLE IF NOT EXISTS `track_users` (
`username` VARCHAR(MAX) NULL,
`name` VARCHAR(MAX) NULL,
`phone` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'user1','Patton Hamilton','+1 (953) 597-3571','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/769/fff/?text=user1','2020-01-08 12:01:28'),
(2,'user2','Meadows Hood','+1 (954) 455-2640','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/714/fff/?text=user2','2020-03-03 06:13:56'),
(3,'user3','Maggie Haney','+1 (833) 500-2935','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/753/fff/?text=user3','2020-08-11 03:24:33'),
(4,'user4','Angeline Ortega','+1 (930) 444-2246','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/969/fff/?text=user4','2020-08-04 07:52:53'),
(5,'user5','Erma Clay','+1 (957) 506-3705','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/954/fff/?text=user5','2020-03-18 04:23:28'),
(6,'user6','Mccarty Burris','+1 (931) 573-2860','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/881/fff/?text=user6','2020-06-30 05:05:27'),
(7,'user7','Tucker Morrison','+1 (850) 563-2115','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/931/fff/?text=user7','2020-11-28 06:40:54'),
(8,'user8','Lauri Fleming','+1 (894) 463-2482','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/756/fff/?text=user8','2020-03-22 06:12:25'),
(9,'user9','Adele Lara','+1 (993) 588-3589','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/892/fff/?text=user9','2020-01-20 03:47:46'),
(10,'user10','Mercado Rowe','+1 (802) 579-3129','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/868/fff/?text=user10','2020-01-01 06:41:16');