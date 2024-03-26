create database if not exists qingliao character set utf8 COLLATE utf8_general_ci;

use mybatis;
-- 用户账号鉴权管理表
create table user_admin(
                     uuid char(32) primary key comment 'uuid',
                     id char(8) comment 'id',
                     password varchar(20) comment '密码',
                     phone varchar(15) comment '手机号',
                     create_time TIMESTAMP comment '创建时间',
                     update_time TIMESTAMP comment '修改时间',
) comment '用户账号鉴权管理表';

-- 用户信息表
create table user_info(
                          uuid char(32) primary key comment 'uuid',
                          id char(8) comment 'id',
                          username varchar(20) comment '昵称',
                          avatar varchar(300) comment '头像地址',
                          born date comment '出生年月日',
                          gender tinyint unsigned comment '性别, 1:男, 2:女',
                          phone varchar(15) comment '手机号',
                          create_time TIMESTAMP NUll comment '创建时间',
                          update_time TIMESTAMP NUll comment '修改时间'
) comment '用户信息表';

insert into user(id, name, age, gender, phone) VALUES (null,'白眉鹰王',55,'1','18800000000');
insert into user(id, name, age, gender, phone) VALUES (null,'金毛狮王',45,'1','18800000001');
insert into user(id, name, age, gender, phone) VALUES (null,'青翼蝠王',38,'1','18800000002');
insert into user(id, name, age, gender, phone) VALUES (null,'紫衫龙王',42,'2','18800000003');
insert into user(id, name, age, gender, phone) VALUES (null,'光明左使',37,'1','18800000004');
insert into user(id, name, age, gender, phone) VALUES (null,'光明右使',48,'1','18800000005');
