import { createSlice } from '@reduxjs/toolkit';
import { register, loginUser, logoutUser, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleLoginUserFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLoginUserRejected = (state, action) => {
  state.error = action.payload;
};

const handleLogoutUserFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

const handleRefreshUserPending = state => state.isRefreshing.true;

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handleRefreshUserRejected = state => (state.isRefreshing = false);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleLoginUserFulfilled)
      .addCase(register.rejected, handleLoginUserRejected)
      .addCase(loginUser.fulfilled, handleLoginUserFulfilled)
      .addCase(loginUser.rejected, handleLoginUserRejected)
      .addCase(logoutUser.fulfilled, handleLogoutUserFulfilled)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;
