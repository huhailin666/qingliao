
import {MobXProviderContext} from "mobx-react";
import {useContext} from "react";
import BaseStore from "@src/store/BaseStore";

function useStore<T extends BaseStore>() {
    const {store} = useContext<T>(MobXProviderContext);
    console.log(3333,store)
    return store || {}
}

export default useStore;