import { createSlice } from '@reduxjs/toolkit'

export const productCarouselCountSlice = createSlice({
  name: 'productCarouselCount',
  initialState: {
    value: 0,
  },
  reducers: {
    resetCount: (state) => {
      state.value = 0
    },
    incrementByAmountCount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementByAmountCount, resetCount } = productCarouselCountSlice.actions

export default productCarouselCountSlice.reducer