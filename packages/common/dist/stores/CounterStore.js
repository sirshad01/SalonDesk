"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterStore = void 0;
var mobx_1 = require("mobx");
var CounterStore = /** @class */ (function () {
    function CounterStore(rootStore) {
        this.count = 0;
        this.rootStore = rootStore;
        // Call it here
        (0, mobx_1.makeAutoObservable)(this);
    }
    CounterStore.prototype.increaseCount = function () {
        this.count += 2;
    };
    return CounterStore;
}());
exports.CounterStore = CounterStore;
