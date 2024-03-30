import React, {useContext, useEffect, useMemo} from "react";
import useStore from "@src/store";
import Store from "../../store";
import {App, Button, Space, Modal, Table} from "antd";
import CreateUser from "../../components/CreateUserDialog";
import {observer} from "mobx-react";

const CLUMNS = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
},
    {
        title: '昵称',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar',
    }, {
        title: '出生',
        dataIndex: 'born',
        key: 'born',
    },
    {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    }, {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
    }]

function UserInfoTable() {
    const {userInfoList, total, page, queryUserInfoList} = useStore<Store>();
    console.log(111, total)
    // console.log(userInfoList);
    const {message, modal, notification} = App.useApp();
    // console.log(111, modal);

    const dataSource = useMemo(() => {
        return userInfoList?.map((item, index) => {
            return {...item, key: index}
        })
    }, [userInfoList])
    const createUser = (user: User) => {
        const xx = modal.confirm({
            footer: null,
            title: '新增用户',
            content: null,
            closable: true,
            icon: null
        });
        xx.update({
            content: <CreateUser user={user} type={1} onClose={xx.destroy}/>,
        });
    }
    const cloums = useMemo(() =>
        CLUMNS.concat([
            {
                title: '操作',
                key: 'action',
                render: (_, record) => (
                    <Space>
                        <Button type="primary" onClick={() => {
                            const xx = modal.confirm({
                                footer: null,
                                title: '修改用户',
                                content: null,
                                closable: true,
                                icon: null
                            });
                            xx.update({
                                content: <CreateUser user={record} onClose={xx.destroy}/>,
                            });

                        }}>编辑</Button>
                        <Button type="primary" onClick={() => {
                            createUser(record);
                        }}>复制用户</Button>
                    </Space>
                ),
            },
        ]), [])
    const onPageChange = (pageNumber: number) => {
        console.log(pageNumber, 333);

        queryUserInfoList(pageNumber);
    }
    return <div>
        <Button type="primary" onClick={createUser}>新增用户</Button>
        <Table
            // title={() => "用户列表"}
            columns={cloums} dataSource={dataSource}
            pagination={{total, defaultCurrent: page, onChange: onPageChange, position: ['topRight']}}/>
    </div>
}


export default observer(UserInfoTable)