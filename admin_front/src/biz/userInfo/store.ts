import {action, makeObservable, observable, runInAction} from 'mobx'
import Service from "./service";
import {User} from "@src/type";
import BaseStore from "@src/store/BaseStore";

const PAGE_SIZE = 10;

class Store extends BaseStore {
    service: Service;
    @observable
    userInfo: User;
    @observable
    page = 1

    constructor(props?: any) {
        super();
        if (props) {
            Object.assign(this, props);
        }
        this.service = new Service();
        makeObservable(this);
    }

    async initData() {
        if (this.query.id) {
            await Promise.all([this.queryUserInfo(), this.querySpeakList()]);
        }
    }

    @action
    queryUserInfo = async () => {
        const res = await this.service.queryUserInfo(
            {id: this.query.id}
        );

        runInAction(() => {
            this.userInfo = res;
        })
    }

    @action
    querySpeakList = async () => {
        const res = await this.service.querySpeakList(
            {uid: this.query.id, page: this.page, size: PAGE_SIZE}
        );
        console.log(111, res)
    }
}

export default Store;
