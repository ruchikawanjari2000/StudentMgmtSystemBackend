import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./studentSlice"
import courseReducer from "./courseSlice"
import inquiryReducer from "./inquirySlice"
import trainerReducer from "./trainerSlice"

export default configureStore({
  reducer: {
    studentR : studentReducer,
    courseR : courseReducer,
    inquiryR : inquiryReducer,
    trainerR : trainerReducer
  },
})