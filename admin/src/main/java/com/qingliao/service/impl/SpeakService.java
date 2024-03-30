package com.qingliao.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qingliao.mapper.SpeakMapper;
import com.qingliao.mapper.UserInfoMapper;
import com.qingliao.pojo.Speak;
import com.qingliao.pojo.UserInfo;
import com.qingliao.service.ISpeakService;
import com.qingliao.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpeakService extends ServiceImpl<SpeakMapper, Speak> implements ISpeakService {
    @Autowired
    private SpeakMapper speakMapper;

    public Page<Speak> getSpeakList(int page, int size, String uid) {
        Page<Speak> rowPage = new Page(page, size, 0, page == 1);
        Speak queryParam = new Speak();
        if (uid != null) {
            queryParam.setUid(uid);
        }
        LambdaQueryWrapper<Speak> queryWrapper = new LambdaQueryWrapper<>(queryParam);
        rowPage = speakMapper.selectPage(rowPage, queryWrapper);
        return rowPage;
    }

}
