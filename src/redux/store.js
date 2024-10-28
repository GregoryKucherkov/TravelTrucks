import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import filtersReducer from "./filters/reduxFilters";
import chosenReducer from "./chosen/reduxChosen";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filters", "chosen"],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer,
  chosen: chosenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
