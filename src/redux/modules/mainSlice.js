import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = 'http://localhost:3001/data';

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

export const __getData = createAsyncThunk(
  "data/GET_DATA",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/data");
      return thunkAPI.fulfillWithValue(data.data);
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
    [__getData.fulfilled]: (state, action) => {
      state.data = [...action.payload]; // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
  },
});

export default main.reducer;
