import { createSlice } from "@reduxjs/toolkit";
import { carDetails, fetchCars, fetchFiltered } from "./CarsOps";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  cars: [],
  carDetails: null,
  currentPage: 1,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1; // Increment the current page
    },
    clearCars: (state) => {
      state.cars = []; // Clear previous results
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.cars = action.payload;
        state.cars = [...state.cars, ...action.payload];
        state.cars = state.cars.filter(
          (car, index, self) => index === self.findIndex((c) => c.id === car.id)
        );
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(carDetails.pending, handlePending)
      .addCase(carDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.carDetails = action.payload;
      })
      .addCase(carDetails.rejected, handleRejected)
      .addCase(fetchFiltered.pending, handlePending)
      .addCase(fetchFiltered.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.cars = [];
        // state.cars = action.payload;

        state.cars = [...state.cars, ...action.payload];
        console.log(state.cars);
        state.cars = state.cars.filter(
          (car, index, self) => index === self.findIndex((c) => c.id === car.id)
        );
      })
      .addCase(fetchFiltered.rejected, handleRejected);
  },
});

export const { incrementPage, clearCars } = carsSlice.actions;

export default carsSlice.reducer;
