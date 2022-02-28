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
  initialState: { checked: false, methodItems: [], materialItems: [] },
  reducers: {
    checkbox(state: any, action) {
      state.checked = action.payload;
    },
    method(state: any, action) {
      if (state.checked) {
        state.methodItems.push(action.payload);
      } else {
        state.methodItems = state.methodItems.filter(
          (item: any) => item !== action.payload
        );
      }
    },
    material(state: any, action) {
      if (state.checked) {
        state.materialItems.push(action.payload);
      } else {
        state.materialItems = state.materialItems.filter(
          (item: any) => item !== action.payload
        );
      }
    },
    reset(state: any, action) {
      state.methodItems.push(action.payload);
      state.materialItems.push(action.payload);
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
