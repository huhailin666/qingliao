import {makeObservable} from "mobx";

export default class BaseStore {
    query: Record<string, string> = {};

    constructor() {

        // makeObservable(this);
    }
}
