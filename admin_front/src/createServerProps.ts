import BaseStore from "./store/BaseStore";
import formatMobx from "@src/utils/formatMobx";
import {toJS} from "mobx";


const createServerProps = (Store: BaseStore) => {
    return async (params: any) => {
        const query = params?.query || {};
        const path = params?.resolvedUrl?.split("?")[0];
        const store = new Store({query});

        // if (!query.csr) {
        //     await store.initData();
        // }
        console.log("初始化了")
        return {
            props: {
                path,
                query,
                store: formatMobx(store)
            }
        }
    }
}

export default createServerProps;