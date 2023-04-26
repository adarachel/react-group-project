import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRockets } = rocketsSlice.actions;

export default rocketsSlice.reducer;
