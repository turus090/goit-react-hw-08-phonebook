import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './slices/profile';
import contactsReducer from './slices/contacts';
import { configureStore } from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    profile: persistReducer(authPersistConfig, profileReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
