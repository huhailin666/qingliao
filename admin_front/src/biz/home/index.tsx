import { Provider, observer} from "mobx-react";
import Store from "./store";
import React, {useContext} from "react";
import UserInfoTable from "./widget/UserInfoTable";
import {App} from "antd";

function Home() {

    return <App>
        <UserInfoTable/>
    </App>
}


const Comp = observer(Home);
const appProvider = (props: any) => {

    const store = new Store(props.store);
    return <Provider store={store}>

        <Comp/>
    </Provider>

}

export default appProvider