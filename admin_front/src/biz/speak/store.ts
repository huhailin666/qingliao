import {action, makeObservable, observable} from 'mobx'
import Service from "./service";
import BaseStore from "@src/store/BaseStore";

const PAGE_SIZE = 10;

class Store extends BaseStore{
    service: Service;
    @observable page = 1;

    @observable total = 0;
    @observable
    speakList = [];

    constructor(props?: any) {
        super();
        if (props) {
            Object.assign(this, props);
        }
        this.service = new Service();
        makeObservable(this);
    }

    async initData() {
        await this.querySpeakList(1);
    }

    @action
    querySpeakList = async (page: number) => {
        this.page = page;
        const res = await this.service.querySpeakList(
            {page, size: PAGE_SIZE}
        );
        this.speakList = res?.records || [];
        if (res?.total) {
            this.total = res?.total;
        }
    }

}

export default Store;
// export default new Store()