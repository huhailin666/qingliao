// // import { action, makeObservable, observable } from 'mobx'

import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

function useStore<T>() {
    const { store } = useContext<T>(MobXProviderContext);
    return store || {}
}
export default useStore;