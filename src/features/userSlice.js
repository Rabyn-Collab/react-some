import { createSlice } from "@reduxjs/toolkit";
import { crudLocal, getData } from "./local";





const initialState = {
  userInfo: getData()
};



const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo.push(action.payload);
      crudLocal(state.userInfo);
    },
    removeUser: (state, action) => {
      state.userInfo.splice(action.payload, 1);
      crudLocal(state.userInfo);
    },
    updateUser: (state, action) => {
      state.userInfo = state.userInfo.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
      crudLocal(state.userInfo);
    },

  }
});


export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

