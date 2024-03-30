import {Store as StoreProps} from "./store";
import formatMobx from "@src/utils/formatMobx";


const createServerProps = (Store: StoreProps) => {
    console.log(999999, StoreProps)
    return async (params: any) => {
        const query = params?.query || {};
        let store;
        if (query.csr) {
            store = {};
        } else {
            store = new Store();
            await store.initData();
        }
        console.log("初始化了")
        return {
            props: {
                query,
                store: formatMobx(store)
            }
        }
    }
}

export default createServerProps;