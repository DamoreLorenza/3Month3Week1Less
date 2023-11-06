
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/indexx'

const store = configureStore({
  reducer: mainReducer, 
})

export default store