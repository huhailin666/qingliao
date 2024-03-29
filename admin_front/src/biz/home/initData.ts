import Request from '@src/utils/request'
import Store from "./store";
import formatMobx from "@src/utils/formatMobx";


const USER_INFO = "/admin/user_info";
const initData = async () => {
    const store = new Store();
    await store.initData();
    console.log("初始化了")
    return {
        props: {
            store: formatMobx(store)
        }
    }
}
export default initData;