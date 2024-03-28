package com.qingliao.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

import java.sql.Date;
import java.time.LocalDateTime;
@TableName(value ="user_info")
@Data
public class UserInfo {
    @NotNull
    private String id;//主键id
    private String uid;// 用户id
    @NotEmpty
    @Pattern(regexp = "^\\S{1,20}$")
    private String username;//用户名
    private String avatar;//用户名
    private Date born;// 出生日期
    private int gender;// 性别
    private LocalDateTime createTime;//创建时间
    private LocalDateTime updateTime;//更新时间
}
