package com.qingliao.pojo.Response;


import com.qingliao.pojo.UserInfo;
import lombok.Data;

import java.util.List;

@Data
public class UserList {
    private List<UserInfo> list;
    private Long count;
}