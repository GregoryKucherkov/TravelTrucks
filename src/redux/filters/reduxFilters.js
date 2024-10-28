import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipment: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
  form: "",
  location: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const feature = action.payload;
      state.equipment[feature] = !state.equipment[feature];
    },
    toggleForm(state, action) {
      if (state.form === action.payload) {
        state.form = "";
      } else {
        state.form = action.payload;
      }
    },
    filtLocation(state, action) {
      if (state.location === action.payload) {
        state.location = "";
      } else {
        state.location = action.payload;
      }
    },
  },
});

export const { toggleFilter, toggleForm, filtLocation } = filterSlice.actions;
export default filterSlice.reducer;
