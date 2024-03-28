package com.qingliao;

import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.Response.UserList;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.UserInfoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.UUID;

/**
 * Unit test for simple App.
 */
@SpringBootTest//如果在测试类上添加了这个注解,那么将来单元测试方法执行之前,会先初始化Spring容器
public class AppTest {
    @Autowired
    private UserInfoService userInfoService;

    @Test
    public void testUserList() {
//        UserList users = userInfoService.getUserList(0,10);
        System.out.println(userInfoService.getUserList(0,10));
    }

}
