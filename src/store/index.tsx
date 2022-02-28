import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface Toggletype {
  checked: boolean;
}
export interface FilterType {
  checked: boolean;
  methodItems: string[];
  materialItems: string[];
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
  initialState: {
    checked: false,
    methodItems: [],
    materialItems: [],
  } as FilterType,
  reducers: {
    checkbox(state, action) {
      state.checked = action.payload;
    },
    method(state, action) {
      if (state.checked) {
        state.methodItems.push(action.payload);
      } else {
        state.methodItems = state.methodItems.filter(
          (item) => item !== action.payload
        );
      }
    },
    material(state, action) {
      if (state.checked) {
        state.materialItems.push(action.payload);
      } else {
        state.materialItems = state.materialItems.filter(
          (item) => item !== action.payload
        );
      }
    },
    reset(state) {
      state.methodItems = [];
      state.materialItems = [];
    },
  },
});

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    filtering: filteringSlice.reducer,
  },
});

export type ReducerType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const toggleActions = toggleSlice.actions;
export const filteringActions = filteringSlice.actions;

export default store;
