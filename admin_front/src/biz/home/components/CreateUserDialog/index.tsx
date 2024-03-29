import useStore from "@src/store";
import Store from "../../store";
import {useMemo, useState} from "react";
import {DatePicker, Modal, Select, Space} from "antd";
import ReactDOM from "react-dom";
import {create} from "domain";
import {createRoot} from "react-dom/client";

import s from './index.module.scss'

import React from 'react';
import {Button, Checkbox, Form, type FormProps, Input} from 'antd';
import {observe} from "mobx";
import {observer} from "mobx-react";
import dayjs from "dayjs";

type FieldType = {
    username?: string;
    avatar?: string;
    born?: string;
    gender?: number
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const UserForm: React.FC<{ user: User }> = ({user}: { user: User }) => (
    <Form
        name="basic"
        className={s.wrapper}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // fields={[{name: ['username'], value: 'Ant Design'}]}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="用户名"
            name="username"
            initialValue={user.username}
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item<FieldType>
            label="头像"
            name="avatar"
            initialValue={user.avatar}

            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item<FieldType>
            label="性别"
            name="gender"
            initialValue={user.gender}
            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <Select>
                <Select.Option value="1">男</Select.Option>
                <Select.Option value="2">女</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item<FieldType>
            label="出生"
            name="born"
            initialValue={user.born}
            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <DatePicker/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>


    </Form>
);

interface Props {
    user?: User,
    onClose: () => void;
    type?: number,//1:新增，0修改
}

function CreateUserDialog({user, type = 0, onClose}: Props) {
    const store = useStore<Store>();
    // const {updateUser}=useStore<Store>();
    console.log(7777, store)
    const onSubmit = (props: User) => {
        // console.log(111, props)
        if (type === 1) {
            store.addUser(props)
        } else {
            store.updateUser({...user, ...props,})
        }
        // onClose?.()
    }
    return <Form
        name="basic"
        className={s.wrapper}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        // fields={[{name: ['username'], value: 'Ant Design'}]}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="用户名"
            name="username"
            initialValue={user?.username}
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <Input/>
        </Form.Item>

        <Form.Item<FieldType>
            label="头像"
            name="avatar"
            initialValue={user?.avatar}

            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item<FieldType>
            label="性别"
            name="gender"
            initialValue={user?.gender}
            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <Select>
                <Select.Option value="1">男</Select.Option>
                <Select.Option value="2">女</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item<FieldType>
            label="出生"
            name="born"
            initialValue={dayjs(user?.born, 'YYYY-MM-DD')}

            rules={[{required: false, message: 'Please input your password!'}]}
        >
            <DatePicker/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Space>
                <Button type="primary" htmlType="submit">
                    确定
                </Button>

                <Button type="primary" onClick={onClose}>
                    取消
                </Button>
            </Space>
        </Form.Item>
    </Form>
}


export default observer(CreateUserDialog)

