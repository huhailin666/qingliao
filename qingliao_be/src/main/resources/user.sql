create database if not exists qingliao character set utf8 COLLATE utf8_general_ci;

use mybatis;
-- 用户账号鉴权管理表
create table user_admin(
                     id char(32) primary key comment 'id',
                     uid char(8) comment 'uid',
                     password varchar(20) comment '密码',
                     phone varchar(15) comment '手机号',
                     create_time TIMESTAMP comment '创建时间',
                     update_time TIMESTAMP comment '修改时间',
) comment '用户账号鉴权管理表';

-- 用户信息表
create table user_info(
                          id char(32) primary key  comment 'id',
                          uid char(8) comment 'uid',
                          username varchar(20) comment '昵称',
                          avatar varchar(300) comment '头像地址',
                          born date comment '出生年月日',
                          gender tinyint unsigned comment '性别, 1:男, 2:女',
                          source tinyint unsigned comment '来源',
                          create_time TIMESTAMP NUll comment '创建时间',
                          update_time TIMESTAMP NUll comment '修改时间'
) comment '用户信息表';

ALTER TABLE user_info ADD COLUMN flag tinyint unsigned comment '逻辑删除';
