import { createSlice } from '@reduxjs/toolkit';

export type HomeState = {
  counter: number;
};

const initialState: HomeState = {
  counter: 0,
};

const sliceName = 'home';

export const homeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    incrementAction: ({ counter }) => ({ counter: ++counter }),
  },
});

const { actions, reducer } = homeSlice;

export const { incrementAction } = actions;

export default reducer;
