import {Provider, observer} from "mobx-react";
import Store from "./store";
import React, {useEffect} from "react";
import appProvider from "@src/appProvider";
import {App,} from "antd";
import Layout from "@src/compoents/Layout"
import UserInfo from "@src/biz/userInfo/widget/Userinfo";
import Speak from "@src/biz/userInfo/widget/Speak";

function Home() {
    return <App>
        <UserInfo></UserInfo>
        <Speak></Speak>
    </App>
}

const Comp = observer(Home);

const Index = (props) => appProvider({
    props, Store, comp: <Comp/>
})

export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}