import { action, makeObservable, observable } from 'mobx'



class Store {
    constructor(props: any) {
        Object.assign(this, props)
        makeObservable(this)
    }
    @observable count: number = 0
    @action addCount(): void {
        this.count++
    }
    @action reduceCount(): void {
        this.count--
    }
}

export default Store;
// export default new Store()