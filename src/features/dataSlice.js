import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState:{
    data:null
  },
  reducers: {
    sendData:(state, action)=>{
      state.data= action.payload;
    }
  },
});



export const {sendData} = dataSlice.actions;

export const selectData = state => state.data.data;

export default dataSlice.reducer;