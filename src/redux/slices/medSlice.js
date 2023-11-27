import { createSlice } from '@reduxjs/toolkit'

export const medSlice = createSlice({
  name: 'user',
  initialState: {
    medList: []
  },
  reducers: {
    addMed: (state, action) => {
      state.medList = [...state.medList, action.payload]
    }
  },
})

export const { addMed } = medSlice.actions

export default medSlice.reducer