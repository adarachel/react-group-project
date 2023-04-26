import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
