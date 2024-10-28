import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosen: [],
};

const chosenSlice = createSlice({
  name: "chosen",
  initialState,
  reducers: {
    addChosen(state, action) {
      const existingCar = state.chosen.find(
        (car) => car.id === action.payload.id
      );
      if (existingCar) {
        state.chosen = state.chosen.filter(
          (car) => car.id !== action.payload.id
        );
      } else {
        state.chosen.push(action.payload);
      }
    },
  },
});

export const { addChosen, deleteChosen } = chosenSlice.actions;
export default chosenSlice.reducer;
