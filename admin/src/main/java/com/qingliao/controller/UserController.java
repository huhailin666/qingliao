package com.qingliao.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qingliao.pojo.Result;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.impl.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/admin/user_info")
public class UserController {
    @Autowired
    private UserInfoService userInfoService;

    @GetMapping("/list")
    public Result getUserList(int page, int size) {
        return Result.success(userInfoService.getUserList(page, size));
    }

    @GetMapping
    public Result getUserInfo(String id, String uid) {
        QueryWrapper<UserInfo> wrapper = new QueryWrapper<>();
        if (uid != null) {
            wrapper.eq("uid", uid);
        }
        if (id != null) {
            wrapper.eq("id", id);
        }

        return Result.success(userInfoService.getOne(wrapper));
    }

    @PostMapping
    public Result addUser(@RequestBody UserInfo user) {
        userInfoService.addUser(user);
        return Result.success();
    }

    @PostMapping("/update")
    public Result update(@RequestBody UserInfo user) {
        if (user.getId() == null)
            return Result.error("params error");
        userInfoService.update(user);
        return Result.success();
    }

    @DeleteMapping
    public Result delete(String id) {
        userInfoService.delete(id);
        return Result.success();
    }
}
