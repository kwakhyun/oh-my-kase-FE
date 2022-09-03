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
    [__getData.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
      state.isDone = false; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
      state.error = null; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getData.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.isDone = true; // 네트워크 요청이 끝났으니, false로 변경
      state.data = [...state.data].concat(action.payload); // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
    [__getData.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.error; // catch 된 error 객체를 state.error에 넣음
    },
  }
})

export default info.reducer