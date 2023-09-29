import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterByName: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
