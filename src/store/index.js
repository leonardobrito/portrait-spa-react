import { configureStore } from '@reduxjs/toolkit'
import stockTicketReducer from './features/stockTicket'

export default configureStore({
  reducer: {
    stockTicket: stockTicketReducer
  },
})
