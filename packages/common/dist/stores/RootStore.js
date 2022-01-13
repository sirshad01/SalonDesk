"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStoreContext = exports.RootStore = void 0;
var react_1 = require("react");
var CounterStore_1 = require("./CounterStore");
// import { WorkoutStore } from "./WorkoutStore";
// import { WorkoutTimerStore } from "./WorkoutTimerStore";
var RootStore = /** @class */ (function () {
    function RootStore() {
        // workoutStore = new WorkoutStore(this)
        this.counterStore = new CounterStore_1.CounterStore(this);
        // workoutTimerStore = new WorkoutTimerStore()
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = (0, react_1.createContext)(new RootStore());
