import { RootStore } from "./RootStore";
export declare class CounterStore {
    rootStore: RootStore;
    count: number;
    constructor(rootStore: RootStore);
    increaseCount(): void;
}
