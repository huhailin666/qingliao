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

        </Card>
    </div>
}

export default observer(UserInfo)