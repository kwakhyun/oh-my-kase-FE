import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: [],
  success: true,
  error: null,
}

export const __getData = createAsyncThunk(
  "data/GET_DATA",
  async(payload, thunkAPI)=>{
    try{
      const data = await axios.get("http://localhost:3001/data")
      return thunkAPI.fulfillWithValue(data.data)
    }catch(error){
      return thunkAPI.fulfillWithValue(error)
    }
  }
)

const info = createSlice({
  name:"info",
  initialState,
  reducers:{},
  extraReducers:{
    [__getData.fulfilled]: (state, action) => {
      state.data = [...action.payload]; // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
  }
})

export default info.reducer