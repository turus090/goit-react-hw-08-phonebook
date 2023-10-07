import profileReducer from './slices/profile';
import contactsReducer from './slices/contacts';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    contacts: contactsReducer,
  },
});

export default store;
