import { createSlice } from '@reduxjs/toolkit';
import { register, loginUser, logoutUser, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleLoginUserFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.authError = null;
};

const handleLogoutUserFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleLoginUserFulfilled)
      .addCase(loginUser.fulfilled, handleLoginUserFulfilled)
      .addCase(logoutUser.fulfilled, handleLogoutUserFulfilled)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;
