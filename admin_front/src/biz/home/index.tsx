import { MobXProviderContext, Provider, observer } from "mobx-react";
import Store from "./store";
import React, { useContext } from "react";
import useStore from "@src/store";

function Home() {
    const store = useStore<Store>();
    console.log(111, store);

    return <main>
        <button onClick={() => store.addCount()}>+</button>
        <h1>{store.count}</h1>
        <button onClick={() => store.reduceCount()}>-</button>
    </main>
}

const Comp = observer(Home);
const appProvider = (props: any) => {
    const store = new Store(props);
    return <Provider store={store}>
        <Comp />
    </Provider>

}

export default appProvider