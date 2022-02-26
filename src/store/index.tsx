import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface Toggletype {
  checked: boolean;
}

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { checked: false } as Toggletype,
  reducers: {
    onToggle(state: Toggletype) {
      state.checked = !state.checked;
    },
  },
});

const filteringSlice = createSlice({
  name: 'filtering',
  initialState: { items: [] },
  reducers: {
    add(state: any, action) {
      state.items.push(action.payload);
    },
    remove(state: any, action) {
      state.items = state.items.filter((item: any) => item !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    filtering: filteringSlice.reducer,
  },
});

export const toggleActions = toggleSlice.actions;
export const filteringActions = filteringSlice.actions;

export default store;
