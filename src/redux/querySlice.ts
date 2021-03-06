import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'query',
  initialState: {
    value: 'Hurt',
  },
  reducers: {
    updateQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateQuery } = slice.actions;
export const selectQuery = (state:any) => state.query.value;
export default slice.reducer;