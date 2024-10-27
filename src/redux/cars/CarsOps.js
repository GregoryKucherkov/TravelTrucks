import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCars = createAsyncThunk(
  "cars / fetchAll",
  async ({ page = 1 }, thunkApi) => {
    try {
      const response = await axios("", { params: { page, limit: 4 } });
      console.log("fetchAll", response.data.items);
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

// export const fetchFiltered = createAsyncThunk(
//   "cars / fetchFiltered",
//   async ({ filters, page }, thunkApi) => {
//     try {
//       const { equipment, form, location } = filters;
//       console.log("fetchFiltered/equipment", equipment);

//       //in order to filter object as with false as arg no matches
//       const filteredEquipment = {};
//       const keys = Object.keys(equipment);
//       for (const key of keys) {
//         if (equipment[key]) {
//           filteredEquipment[key] = equipment[key];
//         }
//       }
//       // console.log("filteredEquipment", filteredEquipment);

//       // Combine all filters into one object for params
//       const params = {
//         ...filteredEquipment, // Spread the equipment as individual boolean params
//         form, // Could be included if needed by backend
//         location, // Could be included if needed by backend
//         page,
//         limit: 4, // Pagination limit
//       };
//       console.log(params);
//       const response = await axios("/", {
//         params,
//       });

//       console.log("fetchFiltered", response.data);
//       return response.data.items;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );

//fetch combined ??

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
      console.log("fetchFiltered-new", response.data);
      return response.data.items;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
