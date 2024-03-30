import {Provider, observer} from "mobx-react";
import Store from "./store";
import React, {useEffect} from "react";
import UserInfoTable from "./widget/UserInfoTable";
import appProvider from "@src/appProvider";
import {App} from "antd";

function Home() {
    return <App> <UserInfoTable/></App>
}

const Comp = observer(Home);

const Index = (props) => appProvider({
    props, store: Store, comp: <Comp/>
})

export default Index