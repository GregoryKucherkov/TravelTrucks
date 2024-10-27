import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipment: {
    AC: true,
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
  location: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const feature = action.payload;
      state.equipment[feature] = !state.equipment[feature];
      // if (state.equipment.includes(action.payload)) {
      //   state.equipment = state.equipment.filter(
      //     (feature) => feature !== action.payload
      //   );
      // } else {
      //   state.equipment.push(action.payload);
      // }
    },
    toggleForm(state, action) {
      if (state.form.includes(action.payload)) {
        state.form = state.form.filter((type) => type !== action.payload);
      } else {
        state.form = action.payload;
      }
    },
    filtLocation(state, action) {
      if (state.location.includes(action.payload)) {
        state.location = state.location.filter(
          (location) => location !== action.payload
        );
      } else {
        state.location.push(action.payload);
      }
    },
  },
});

export const { toggleFilter, toggleForm, filtLocation } = filterSlice.actions;
export default filterSlice.reducer;
