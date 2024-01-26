import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formSlice from "../features/formSlice";

const rootReducer = combineReducers({
  form: formSlice,
})
export const store = configureStore({
  reducer: rootReducer,

});
