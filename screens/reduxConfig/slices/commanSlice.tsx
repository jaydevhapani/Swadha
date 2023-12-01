import {createSlice} from '@reduxjs/toolkit';

export const CommanSlice = createSlice({
  name: 'CommanSlice',
  initialState: {
    isLoader: false,
  },
  reducers: {
    isLoaderState: (state, action) => {
      state.isLoader = action.payload;
    },
  },
});

export const {isLoaderState} = CommanSlice.actions;

export default CommanSlice.reducer;
