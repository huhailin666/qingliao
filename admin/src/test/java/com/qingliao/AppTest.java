package com.qingliao;

import com.qingliao.service.impl.UserInfoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
