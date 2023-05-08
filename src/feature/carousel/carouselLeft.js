import { createSlice } from '@reduxjs/toolkit'

export const productCarouselLeftSlice = createSlice({
  name: 'productCarouselLeft',
  initialState: {
    value: 0,
  },
  reducers: {
    resetLeft: (state) => {
      state.value = 0
    },
    incrementLeft: (state) => {
      state.value += 1
    },
    decrementLeft: (state) => {
      state.value -= 1
    },
    incrementByAmountLeft: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementLeft, decrementLeft, incrementByAmountLeft, resetLeft } = productCarouselLeftSlice.actions

export default productCarouselLeftSlice.reducer