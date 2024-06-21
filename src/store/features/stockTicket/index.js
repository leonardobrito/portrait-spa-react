import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    search(state, payload) {
      console.log(payload);
      state.value = [
        {
          item: 'Price',
          maximum: '$500',
          minimum: '$100',
          average: '$300'
        },
        {
          item: 'Volume',
          maximum: '1000',
          minimum: '500',
          average: '700'
        },
      ]
    },
  },
})

// Action creators are generated for each case reducer function
export const { search } = counterSlice.actions

export default counterSlice.reducer
