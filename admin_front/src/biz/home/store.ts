import {action, makeObservable, observable} from 'mobx'
import Service from "./service";

const PAGE_SIZE = 10;

class Store {
    service: Service;
    @observable page = 1;

    @observable total = 0;
    @observable
    userInfoList = [];

    constructor(props?: any) {
        if (props) {
            Object.assign(this, props);
        }
        this.service = new Service();
        makeObservable(this);
    }

    async initData() {
        await this.queryUserInfoList(1);
    }

    @action
    queryUserInfoList = async (page: number) => {
        this.page = page;
        const res = await this.service.queryUserList(
            {page, size: PAGE_SIZE}
        );
        this.userInfoList = res?.records || [];
        if (res?.total) {
            this.total = res?.total;
        }
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
