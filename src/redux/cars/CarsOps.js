import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchFiltered = createAsyncThunk(
  "cars/fetchFiltered",
  async ({ filters = {}, page }, thunkApi) => {
    try {
      const { equipment = {}, form = "", location = "" } = filters;
      const filteredEquipment = {};

      const keys = Object.keys(equipment);
      for (const key of keys) {
        if (equipment[key]) {
          filteredEquipment[key] = equipment[key];
        }
      }

      const params = {
        ...filteredEquipment,
        form,
        location,
        page,
        limit: 4,
      };

      const response = await axios("/", { params });
      if (response.data.items.length === 0) {
        // Show toast notification if the list is empty
        toast.error("No more cars in the base. Try to set up new search.");
      }
      return response.data.items;
    } catch (e) {
      if (e.response && e.response.data === "Not found") {
        toast.error("The car wasnt found! Try other filters");
        return thunkApi.rejectWithValue("Not found car"); // Reject with a specific message
      }
      return thunkApi.rejectWithValue(e.message); // General error handling
    }
  }
);

export const carDetails = createAsyncThunk(
  "cars/carDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axios(`/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
