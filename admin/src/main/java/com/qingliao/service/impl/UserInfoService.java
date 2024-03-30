package com.qingliao.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.Response.UserList;
import com.qingliao.pojo.Result;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.IUserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoService extends ServiceImpl<UserInfoMapper, UserInfo> implements IUserService {
    @Autowired
    private UserInfoMapper userMapper;

    public Page<UserInfo> getUserList(int page, int size) {
        Page<UserInfo> rowPage = new Page(page, size, 0, page == 1);
        LambdaQueryWrapper<UserInfo> queryWrapper = new LambdaQueryWrapper<>();
        rowPage = userMapper.selectPage(rowPage, queryWrapper);
        return rowPage;
    }

    public void addUser(UserInfo user) {
        userMapper.insert(user);
    }

    public void update(UserInfo user) {
        userMapper.updateById(user);
    }

    public void delete(String id) {
        userMapper.deleteById(id);
    }
}
