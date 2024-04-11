import React, {useContext, useEffect, useMemo} from "react";
import useStore from "@src/store/useStore";
import Store from "../../store";
import {App, Button, Space, Modal, Table} from "antd";
import CreateUser from "../../components/CreateUserDialog";
import {observer} from "mobx-react";
import {useRouter} from "next/router";

const COLUMNS = [{
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
        render: (_, record) => {
            if (record.gender) {
                return record.gender === 1 ? '男' : '女'
            }
            return '-'
        }
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
    const store = useStore<Store>();
    const {userInfoList, total, page, queryUserInfoList} = store;

    console.log(111,store, total, store.total)
    // console.log(userInfoList);
    const {modal} = App.useApp();

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
    const router = useRouter();
    const colums = useMemo(() =>
        COLUMNS.concat([
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
                            router.push("/user_info?id="+record?.id)
                        }}>查看用户详情</Button>
                        {/*<Button type="primary" onClick={() => {*/}
                        {/*    createUser(record);*/}
                        {/*}}>复制用户</Button>*/}
                    </Space>
                ),
            },
        ]), [])
    const onPageChange = (pageNumber: number) => {
        queryUserInfoList(pageNumber);
    }
    return <div>
        <Button type="primary" onClick={createUser}>新增用户</Button>
        <Table
            // title={() => "用户列表"}
            columns={colums} dataSource={dataSource}
            pagination={{total, defaultCurrent: page, onChange: onPageChange, position: ['topRight']}}/>
    </div>
}


export default observer(UserInfoTable)