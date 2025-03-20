import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Features/AuthSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducer here
  }
});

export default store;
