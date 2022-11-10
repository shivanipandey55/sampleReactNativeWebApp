import { createSlice } from '@reduxjs/toolkit';
import UserState from '../interfaces/UserState';
import handleSignup from '../thunk/signup/Signup';
const initialState: UserState = {
  loading: 'idle',
  error: '',
};

const SignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(handleSignup.pending, (state: UserState) => {
      state.loading = 'pending';
    });
    builder.addCase(handleSignup.fulfilled, (state: UserState) => {
      state.loading = 'succeeded';
    });
    builder.addCase(handleSignup.rejected, (state: UserState) => {
      state.loading = 'failed';
    });
  },
});
export const SignupReducer = SignupSlice.reducer;
