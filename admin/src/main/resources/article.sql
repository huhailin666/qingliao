create database if not exists qingliao character set utf8 COLLATE utf8_general_ci;

use mybatis;
-- 朋友圈表
create table speak(
                     id char(32) primary key comment 'id',
                     uid char(32) comment '用户id',
                     text varchar(2000) comment '发圈文案',
                     imgs varchar(2000) comment '发圈图片',
                     favor int comment '点赞数',
                     review_num int comment '评价数',
                     create_time TIMESTAMP comment '创建时间',
                     update_time TIMESTAMP comment '修改时间',
                     flag tinyint unsigned comment '逻辑删除'
) comment '朋友圈表';
-- ALTER TABLE user_info ADD COLUMN flag tinyint unsigned comment '逻辑删除';