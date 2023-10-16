import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUpApi, signInApi, signOutApi } from './../../api/api';

const initialState = {
  user: {
    email: localStorage.getItem('email'),
  },
  token: null,
  isLogin: false,
  failSign: false,
};

export const signUpData = createAsyncThunk(
  'profile/signup',
  async candidate => {
    const response = await signUpApi(candidate);
    return response;
  }
);

export const signInData = createAsyncThunk('profile/login', async candidate => {
  const response = await signInApi(candidate);
  return response;
});
export const logoutData = createAsyncThunk('profile/logout', async token => {
  const response = await signOutApi(token);
  return response;
});
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeInput: state => {
      state.failSign = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUpData.fulfilled, (state, action) => {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLogin = true;
    });
    builder.addCase(signInData.fulfilled, (state, action) => {
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLogin = true;
      state.failSign = false;
    });
    builder.addCase(signInData.rejected, (state, action) => {
      state.failSign = true;
    });
    builder.addCase(logoutData.fulfilled, (state, action) => {
      state.user = {};
      state.token = null;
      state.isLogin = false;
    });
  },
});

export const { changeInput } = profileSlice.actions;
export default profileSlice.reducer;
