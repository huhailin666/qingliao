import {observer} from "mobx-react";
import s from './index.module.scss'
import React from "react";
import Search, {SearchProps} from "antd/lib/input/Search";
import useStore from "@src/store/useStore";
import Store from "@src/biz/userInfo/store";
import {Card} from "antd";

const UserInfo = () => {
    const {userInfo} = useStore<Store>()
    const onSearch = (value: string) => {
        console.log(value);
    }


    return <div className={s.wrap}>
        <Card title="个人信息" extra={<a href="#">More</a>}>

            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <div className={s.userInfoWrap}>
                <div>
                    <span className={s.label}>id:</span>
                    <span className={s.value}>{userInfo?.id}</span>
                </div>
                <div><span className={s.label}>username:</span>
                    <span className={s.value}>{userInfo?.username}</span>
                </div>
                <div><span className={s.label}>gender:</span>
                    <span className={s.value}>{userInfo?.gender}</span>
                </div>
                <div><span className={s.label}>born:</span>
                    <span className={s.value}>{userInfo?.born}</span>
                </div>
                <div><span className={s.label}>createTime:</span>
                    <span className={s.value}>{userInfo?.createTime}</span>
                </div>
                <div><span className={s.label}>updateTime:</span>
                    <span className={s.value}>{userInfo?.updateTime}</span>
                </div>
            </div>
        </Card>
    </div>
}

export default observer(UserInfo)