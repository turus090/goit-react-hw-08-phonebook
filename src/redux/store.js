import profileReducer from './slices/profile';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
