import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/slice';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
