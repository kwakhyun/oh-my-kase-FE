import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getDetailData = createAsyncThunk(
  "data/GET_DETAIL_DATA",
  async (restaurant_id, thunkAPI) => {
    try {
      const response = await axios.get(`http://3.34.48.111/api/restaurant/${restaurant_id}`);
      console.log(response)
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error)
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState:{data:[]},
  reducers: {},
  extraReducers: {
    [getDetailData.fulfilled]: (state, action) => {
      state.data = action.payload
    },
  },
});
export default detailSlice.reducer;
