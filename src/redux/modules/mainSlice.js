import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = process.env.REACT_APP_SERVER_URL;
const ServerURL = process.env.REACT_APP_RESTAURANT_URL;

const instance = axios.create({ baseURL: URL});

const initialState = {
  data: [],
  isSuccess: true,
  error: null,
};

export const getDataScroll = async (page, limit) => {
  const response = await instance.get(`/?_page=${page}&_limit=${limit}`);
  return response.data;
};

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
      const response = await axios.patch(URL+`/${payload.restaurant_id}`, payload);
      return thunkAPI.fulfillWithValue(response.data);
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
  },
});

export default main.reducer;
