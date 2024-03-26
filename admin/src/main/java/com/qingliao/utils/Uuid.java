package com.qingliao.utils;

import java.util.UUID;

public class Uuid {
    public static String createUuid() {
        return UUID.randomUUID().toString().replaceAll("-", "");
    }
}
