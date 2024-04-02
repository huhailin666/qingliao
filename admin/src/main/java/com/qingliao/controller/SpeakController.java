package com.qingliao.controller;

import com.qingliao.pojo.Result;
import com.qingliao.pojo.Speak;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.impl.SpeakService;
import com.qingliao.service.impl.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/admin/speak")
public class SpeakController {
    @Autowired
    private SpeakService service;

    @GetMapping("/list")
    public Result getList(int page, int size, String uid) {
        return Result.success(service.getSpeakList(page, size, uid));
    }
    @GetMapping
    public Result getUserInfo(String id) {
        return Result.success(service.getById(id));
    }

    @PostMapping
    public Result saveOrUpdate(@RequestBody Speak speak) {
        service.saveOrUpdate(speak);
        return Result.success();
    }

    @DeleteMapping
    public Result delete(List<String> ids) {
        service.removeBatchByIds(ids);
        return Result.success();
    }
}
