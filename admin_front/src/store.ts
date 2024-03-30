// // import { action, makeObservable, observable } from 'mobx'

import {MobXProviderContext} from "mobx-react";
import {useContext} from "react";

import {makeObservable} from 'mobx'


export class Store {
    query: Record<string, string>;

    constructor(props?: any) {
        makeObservable(this);
    }
}


// export default new Store()

function useStore<T>() {
    const {store} = useContext<T>(MobXProviderContext);
    return store || {}
    // return {}
}

export default useStore;