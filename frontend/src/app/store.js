import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/AuthSlice'; 
import userReducer from '../Features/UserSlice'; // Renamed for clarity

const store = configureStore({
  reducer: {
    auth: authReducer, 
    users: userReducer // Updated the name here
  }
});

export default store;
