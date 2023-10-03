import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const authInitialState = {
  userEmail: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authorization',
  initialState: authInitialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userEmail = action.payload.user.email;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userEmail = action.payload.user.email;
    },
    [logOut.fulfilled]: state => {
      state.isLoggedIn = false;
      state.token = null;
      state.userEmail = null;
    },
  },
});

export const authReducer = authSlice.reducer;
