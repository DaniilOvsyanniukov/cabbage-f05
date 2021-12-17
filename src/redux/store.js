import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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
import logger from 'redux-logger';
import authSliceReducer from './auth/auth-slice';
import { transactionsReducer } from './transaction';
import chosenMonthReduser from './chosenMonth/chosenMonth-reduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSliceReducer),
    transactions: transactionsReducer,

    desiredMonth: chosenMonthReduser,
  },
  middleware,
  devtools: process.env.NODE_ENV !== 'development',
});

export const persistor = persistStore(store);


const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig),
    contacts:{}
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});