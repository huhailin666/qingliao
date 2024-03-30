import {Provider, observer} from "mobx-react";
import Store from "./store";
import React, {useEffect} from "react";
import UserInfoTable from "./widget/SpeakTable";
import appProvider from "@src/appProvider";
import {App,} from "antd";
import Layout from "@src/compoents/Layout"

function Home() {
    return <App>

        <div>哈哈哈</div>
    </App>
}

const Comp = observer(Home);

const Index = (props) => appProvider({
    props, store: Store, comp: <Comp/>
})

export default Index

Index.getLayout = function getLayout(page:React.ReactElement) {
    return (
        <Layout>
            {/*hhh*/}
            {page}
        </Layout>
    )
}