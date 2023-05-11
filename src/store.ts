import { configureStore } from '@reduxjs/toolkit'
import casesReducer from './redux/casesSlice'
import { useDispatch } from 'react-redux';
import formReducer from './redux/formSlice'
import mapReducer from './redux/mapSlice'
import covidDataReducer from './redux/lineChartSlice'

export const store = configureStore({
  reducer: {
  //  users:userReducer,
  holders:formReducer,
  cases:casesReducer,
  maps:mapReducer,
  chart:covidDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store