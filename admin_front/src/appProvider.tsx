import {Store} from "./store";
import React, {useEffect} from "react";
import {Provider,} from "mobx-react";

interface Props {
    props: {
        store: Store;
        query: Record<string, string>;
    };
    store: Store;
    comp: React.ReactElement;
}

const appProvider = ({props, store: CurStore, comp}: Props) => {
    // let store
    const store = new CurStore({query: props?.query, ...(props?.store || {})});
    useEffect(() => {
        if (props.query.csr) {
            store.initData();
        }
    }, [])

    return <Provider store={store}>
        {comp}
    </Provider>
}

export default appProvider