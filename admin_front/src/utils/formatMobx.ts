// 移除mobx上不该有的属性
import {toJS} from "mobx";

const IGNORE_ATTR = new Set(['service'])

const formatMobx = (store) => {

    if (!store || typeof store !== 'object') {
        return store;
    }
    const o = {};
    // console.log()
    for (const key in store) {
        // console.log(555, key, store[key])
        if (IGNORE_ATTR.has(key) || store[key] instanceof Function || store[key] === undefined) {
            continue;
        }
        o[key] = store[key];
    }
    console.log(1111, o)
    return o;
}

export default formatMobx