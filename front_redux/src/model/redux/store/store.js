import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from '../reducers/employeeReducer';
import { userReducer } from '../reducers/userReducer'

export const store = configureStore({
  reducer: {
    allEmployees: employeeReducer,
    auth: userReducer
  }
})
