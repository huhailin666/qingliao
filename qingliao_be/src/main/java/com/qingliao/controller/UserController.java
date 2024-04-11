package com.qingliao.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qingliao.pojo.Result;
import com.qingliao.pojo.UserInfo;
//import com.qingliao.service.impl.UserInfoService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;


@CrossOrigin
@RestController
@RequestMapping("/qingliao/user_info")
public class UserController {
    //    @Autowired
//    private UserInfoService userInfoService;
//    @Autowired
    private RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/login")
    public String login(String code) {
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx31e7add1c9ec7dba&secret=0dc0f2ecc7cc604c4769aa68bea388c8&js_code=" + code + "&grant_type=authorization_code";
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, String.class);
        System.out.println(responseEntity);
        // 判断请求是否成功
        if (responseEntity != null && responseEntity.getStatusCode() == HttpStatus.OK) {
            // 获取主要内容
            String sessionData = responseEntity.getBody();
            Map<String, Object> map = JSON.parseObject(sessionData, new TypeReference<Map<String, Object>>() {
            });
            return (String) map.get("openid");
        } else {
            return "错误";

//        return Result.success(userInfoService.getUserList(page, size));
        }
    }

}
