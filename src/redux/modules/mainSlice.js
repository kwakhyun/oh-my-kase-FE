import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItem = createAsyncThunk("main/getItem", async () => {
  const response = await axios.get(`/api/items`);
  return response.data;
});

export const likedItem = createAsyncThunk("main/likedItem", async (item) => {
  await axios.patch(`/api/items/${item.id}`, {
    liked: !item.liked,
  });
});

const mainSlice = createSlice({
  name: "main",
  initialState: {
    items: [],
  },
  reducers: {
    setLikedItem: (state, action) => {
      state.items.reduce((acc, cur) => {
        if (cur.id === action.payload.id) {
          cur.liked = action.payload.liked;
        }
        return acc;
      }, []);
    },
  },
  extraReducers: {
    [getItem.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setLikedItem } = mainSlice.actions;
export default mainSlice.reducer;
