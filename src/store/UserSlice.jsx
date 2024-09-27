import { createSlice } from '@reduxjs/toolkit'


let userDetails = JSON.parse(localStorage.getItem('socialDetails'))
const initialState = {
 
    login:userDetails? userDetails.login : false,
    token:userDetails? userDetails.token : ''

}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateValue: (state,action) => {
      console.log(action)
      return {...state,login:action.payload.login,token:action.payload.token}
    },
    logout: (state) => {
      return {...state,login:false,token:''}
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateValue, logout, incrementByAmount } = UserSlice.actions

export default UserSlice.reducer