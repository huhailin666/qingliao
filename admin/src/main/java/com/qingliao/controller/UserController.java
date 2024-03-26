package com.qingliao.controller;

import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/user")
public class UserController {
//    @Autowired
//    private UserInfoMapper userMapper;
    @GetMapping
    public String getUser() {

//        List<UserInfo> users = userMapper.selectList(null);
//        for (UserInfo user : users) {
//            System.out.println(user);
//        }

        return "haline";
    }
}
