import { createSlice } from '@reduxjs/toolkit'

export const productCarouselRigthSlice = createSlice({
  name: 'productCarouselRigth',
  initialState: {
    value: 0,
  },
  reducers: {
    resetRigth: (state) => {
        state.value = 0
    },
    incrementRigth: (state) => {
      state.value += 1
    },
    decrementRigth: (state) => {
      state.value -= 1
    },
    incrementByAmountRigth: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementRigth, decrementRigth, incrementByAmountRigth, resetRigth } = productCarouselRigthSlice.actions

export default productCarouselRigthSlice.reducer