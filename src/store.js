import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './slices/userSlice'
import commonSliceReducer from './slices/commonSlice'

export const store = configureStore({
  reducer: {
    userStore:userSliceReducer,
    commonStore:commonSliceReducer
  },
})