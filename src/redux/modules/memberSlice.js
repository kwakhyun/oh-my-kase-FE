import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const joinMember = createAsyncThunk("user/joinMember", async (data) => {
  const response = await axios.post("/api/users", data);
  return response.data;
});

const memberSlice = createSlice({
  name: "member",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default memberSlice.reducer;
