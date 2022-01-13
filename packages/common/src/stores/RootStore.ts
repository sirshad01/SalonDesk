import { createContext } from "react";
import { CounterStore } from "./CounterStore";
// import { WorkoutStore } from "./WorkoutStore";
// import { WorkoutTimerStore } from "./WorkoutTimerStore";

export class RootStore {

    // workoutStore = new WorkoutStore(this)
    counterStore = new CounterStore(this)
    // workoutTimerStore = new WorkoutTimerStore()
}

export const RootStoreContext = createContext(new RootStore());