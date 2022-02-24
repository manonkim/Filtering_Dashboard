import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, //초기값설정
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const toggleSlice = createSlice({
  name: "Toggle",
  initialState: { checked: false },
  reducers: {
    onToggle(state) {
      state.checked = true;
    },
    offToggle(state) {
      state.checked = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, toggle: toggleSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const toggleActions = toggleSlice.actions;

export default store;
