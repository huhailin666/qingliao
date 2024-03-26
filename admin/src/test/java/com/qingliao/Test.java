package com.qingliao;

import java.util.UUID;

public class Test {
    public static void main(String[] args) {
//        UUID uuid = new UUID(time, random);
//        System.out.println("生成的UUID为：" + uuid.toString());
        System.out.println(UUID.randomUUID().toString());
        System.out.println(UUID.randomUUID().toString().replaceAll("-", ""));
    }
}
