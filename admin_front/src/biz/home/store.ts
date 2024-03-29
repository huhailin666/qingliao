import {action, makeObservable, observable} from 'mobx'
import Service from "./service";

const PAGE_SIZE = 10;

class Store {
    service: Service;
    @observable
    userInfoList = [];
    @observable page = 1;

    constructor(props?: any) {
        if (props) {
            Object.assign(this, props);
        }
        this.service = new Service();
        makeObservable(this);
    }

    async initData() {
        await this.queryUserInfoList();
    }

    async queryUserInfoList() {
        const res = await this.service.queryUserList();
        this.userInfoList = res?.records || [];
    }

    @action
    async updateUser(user: User) {
        await this.service.updateUser(user);
    }

    @action
    async addUser(user: User) {
        await this.service.addUser(user);
    }
}

export default Store;
// export default new Store()