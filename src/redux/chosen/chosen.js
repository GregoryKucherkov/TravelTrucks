import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosen: [],
};

const chosenSlice = createSlice({
  name: "chosen",
  initialState,
  reducers: {
    addChosen(state, action) {
      state.chosen.push(action.payload);
    },
    deleteChosen(state, action) {
      state.chosen = state.chosen.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addChosen, deleteChosen } = chosenSlice.actions;

export default chosenSlice.reducer;
