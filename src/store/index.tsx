import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface Toggletype {
  checked: boolean;
}

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { checked: false } as Toggletype,
  reducers: {
    onToggle(state: Toggletype) {
      state.checked = !state.checked;
    },
  },
});

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState, //초기값설정
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer },
});

// export const counterActions = counterSlice.actions;
export const toggleActions = toggleSlice.actions;

// export const rootReducer = combineReducers({});
// export type RootState = ReturnType<typeof rootReducer>;

export default store;
