import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import filtersReducer from "./filters/reduxFilters";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});

export default store;
