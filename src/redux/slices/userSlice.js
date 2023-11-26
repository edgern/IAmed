import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: false,
    name: '',
    email: ''
  },
  reducers: {
    login: (state) => {
      state.auth = true
    },
    logout: (state) => {
      state.auth = false
    },
    setUserName: (state, action) => {
      state.name += action.payload
    },
    setUserEmail: (state, action) => {
      state.email += action.payload
    },
  },
})

export const { login, logout, setUserName, setUserEmail } = userSlice.actions

export default userSlice.reducer