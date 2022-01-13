import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class CounterStore {
    rootStore: RootStore;
    count = 0;

    constructor(rootStore: RootStore) {

        this.rootStore = rootStore;
        // Call it here
        makeAutoObservable(this)
    }


    increaseCount() {
        this.count += 2
    }
}
