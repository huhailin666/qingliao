// 移除mobx上不该有的属性
const IGNORE_ATTR = new Set(['service'])

const formatMobx = (store) => {

    if (!store || typeof store !== 'object') {
        return store;
    }
    const o = store instanceof Array ? [] : {};
    // console.log()
    for (const key in store) {
        // console.log(555, key, store[key])
        if (IGNORE_ATTR.has(key)) {
            continue;
        }
        o[key] = store[key];
    }
    return o;
}

export default formatMobx