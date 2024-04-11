import {Provider, observer} from "mobx-react";
import Store from "./store";
import React, {useEffect} from "react";
import UserInfoTable from "./widget/SpeakTable";
import appProvider from "@src/appProvider";
import {App,} from "antd";
import Layout from "@src/compoents/Layout"
import SpeakTable from "./widget/SpeakTable";

function Home() {
    return <App>

       <SpeakTable/>
    </App>
}

const Comp = observer(Home);

const Index = (props) => appProvider({
    props, Store, comp: <Comp/>
})

export default Index

Index.getLayout = function getLayout(page:React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}