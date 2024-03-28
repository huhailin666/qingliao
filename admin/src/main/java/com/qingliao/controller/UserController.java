package com.qingliao.controller;

import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.Result;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/user_info")
public class UserController {
    @Autowired
    private UserInfoService userInfoService;

    @GetMapping
    public Result getUserList(int page, int size) {
        return Result.success(userInfoService.getUserList(page, size));
    }

    @PostMapping
    public Result addUser(@RequestBody UserInfo user) {
        userInfoService.addUser(user);
        return Result.success();
    }

    @PostMapping("update")
    public Result update(@RequestBody UserInfo user) {
        userInfoService.update(user);
        return Result.success();
    }

    @DeleteMapping
    public Result delete(String id) {
        userInfoService.delete(id);
        return Result.success();
    }
}
