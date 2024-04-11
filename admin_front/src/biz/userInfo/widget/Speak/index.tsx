import {observer} from "mobx-react";
import s from './index.module.scss'
import React from "react";
import Search, {SearchProps} from "antd/lib/input/Search";
import useStore from "@src/store/useStore";
import Store from "@src/biz/userInfo/store";
import {App, Button, Card} from "antd";
import CreateUser from "@src/biz/home/components/CreateUserDialog";

const CreateSpeakDialog = () => {
    const {userInfo} = useStore<Store>()
    const {modal} = App.useApp();

    const createSpeak = () => {
        const xx = modal.confirm({
            footer: null,
            title: '增加说说',
            content: null,
            closable: true,
            icon: null
        });
        xx.update({
            content: '',
        });
    }


    return <div className={s.wrap}>
        <Card title="我的说说" extra={<a href="#">More</a>}>
            <Button type={"primary"} onClick={createSpeak}>增加说说</Button>

        </Card>

    </div>
}

export default observer(CreateSpeakDialog)