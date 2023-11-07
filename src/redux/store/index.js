
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/indexx'
import searchReducer from '../reducers/searc'

const bigReducer= combineReducers({
  main : mainReducer,
  search : searchReducer

})

const store = configureStore({
  reducer: bigReducer
})

export default store