import BaseStore from "./store/BaseStore";
import React, {useEffect} from "react";
import {Provider} from "mobx-react";

interface Props {
    props: {
        store: BaseStore;
        query: Record<string, string>;
    };
    Store: BaseStore;
    comp: React.ReactElement;
}

const appProvider = ({props, Store, comp}: Props) => {

    const store = new Store(props?.store || {});


    useEffect(() => {
        // if (store.query?.csr) {
        store.initData();
        // }

    }, [])
    console.log(222, store)
    return <Provider store={store}>
        {comp}
    </Provider>
}

export default appProvider