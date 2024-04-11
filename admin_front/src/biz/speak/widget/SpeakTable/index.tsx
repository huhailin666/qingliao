import React, {useContext, useEffect, useMemo} from "react";
import useStore from "@src/store/useStore";
import Store from "../../store";
import {App, Button, Space, Modal, Table} from "antd";
import {observer} from "mobx-react";

const COLUMNS = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'uid',
        dataIndex: 'uid',
        key: 'uid',
    },
    {
        title: '内容',
        dataIndex: 'text',
        key: 'text',
    },
    {
        title: '点赞数',
        dataIndex: 'favor',
        key: 'favor',
    }, {
        title: '评论数',
        dataIndex: 'reviewNum',
        key: 'reviewNum',
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

function SpeakTable() {
    const {speakList, total, page, querySpeakList} = useStore<Store>();
    const {modal} = App.useApp();

    const dataSource = useMemo(() => {
        return speakList?.map((item, index) => {
            return {...item, key: index}
        })
    }, [speakList])
    const createUser = (user: User) => {
        const xx = modal.confirm({
            footer: null,
            title: '新增用户',
            content: null,
            closable: true,
            icon: null
        });
        xx.update({
            // content: <CreateUser user={user} type={1} onClose={xx.destroy}/>,
        });
    }
    const columns = useMemo(() =>
        COLUMNS.concat([
            {
                title: '操作',
                key: 'action',
                render: (_, record) => (
                    <Space>
                        <Button type="primary" onClick={() => {
                            const xx = modal.confirm({
                                footer: null,
                                title: '修改说说内容',
                                content: null,
                                closable: true,
                                icon: null
                            });
                            xx.update({
                                // content: <CreateUser user={record} onClose={xx.destroy}/>,
                            });

                        }}>编辑</Button>
                        <Button type="primary" onClick={() => {
                            // createUser(record);
                        }}>复制用户</Button>
                    </Space>
                ),
            },
        ]), [])
    const onPageChange = (pageNumber: number) => {
        querySpeakList(pageNumber);
    }
    return <div>
        {/*<Button type="primary" onClick={createUser}>新增用户</Button>*/}
        <Table
            columns={columns} dataSource={dataSource}
            pagination={{total, defaultCurrent: page, onChange: onPageChange, position: ['topRight']}}/>
    </div>
}


export default observer(SpeakTable)