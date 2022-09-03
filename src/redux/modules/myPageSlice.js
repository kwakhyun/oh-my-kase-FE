import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLiked = createAsyncThunk("user/getLiked", async (id) => {
  const response = await axios.get(`/api/users/${id}/liked`);
  return response.data;
});

export const getComments = createAsyncThunk("user/getComments", async (id) => {
  const response = await axios.get(`/api/users/${id}/comments`);
  return response.data;
});

const myPageSlice = createSlice({
  name: "myPage",
  initialState: {
    liked: [],
    comments: [],
  },
  extraReducers: {
    [getLiked.fulfilled]: (state, action) => {
      state.liked = action.payload;
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export default myPageSlice.reducer;
