import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      return response.data.items;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
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
