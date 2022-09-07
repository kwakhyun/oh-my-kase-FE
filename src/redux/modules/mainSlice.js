import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = process.env.REACT_APP_SERVER_URL;
const ServerURL = process.env.REACT_APP_RESTAURANT_URL;

const initialState = {
  data: [],
  region: [],
  isSuccess: true,
  error: null,
};


// const MainURL = "http://3.34.48.111/api/restaurant";
// const instance = axios.create({ baseURL: MainURL });
// export const getItems = async (page, limit) => {
//   const res = await instance.get(`/?_page=${page}&_limit=${limit}`);
//   return res.data;
// };

export const getData = createAsyncThunk(
  "data/GET_DATA",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://3.34.48.111/api/restaurant");
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.fulfillWithValue(error);
    }
  }
);
export const updateData = createAsyncThunk(
  "data/UPDATE_DATA",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        URL + `/${payload.restaurant_id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

export const getRegionData = createAsyncThunk(
  "data/GET_REGION_DATA",
  async (region, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://3.34.48.111/api/restaurant/region/${region}`
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

const main = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.data = [...action.payload]; // Store에 있는 list에 서버에서 가져온 restaurant 넣음
    },
    [updateData.fulfilled]: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.restaurant_id ? { ...action.payload } : item
      );
    },
    [getRegionData.fulfilled]: (state, action) => {
      state.region = action.payload;
    },
  },
});

export default main.reducer;
