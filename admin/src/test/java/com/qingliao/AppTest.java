package com.qingliao;

import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.UserInfo;
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
    private UserInfoMapper userMapper;

    @Test
    public void testSet() {
        List<UserInfo> users = userMapper.selectList(null);
        for (UserInfo user : users) {
            System.out.println(user);
        }
    }

}
