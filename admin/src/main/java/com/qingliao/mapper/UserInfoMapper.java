package com.qingliao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qingliao.pojo.UserInfo;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;
//@Component
@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
}
