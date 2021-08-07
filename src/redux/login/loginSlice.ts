import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { loginRequest } from './loginApi';

export type UserInfo = {
   userName: string;
   email: string;
   token: string;
};

interface LoginState {
   isLoggedIn: true | false;
   user: UserInfo;
   loading: true | false;
}

const initialState: LoginState = {
   isLoggedIn: false,
   user: {
      userName: '',
      email: '',
      token: '',
   },
   loading: false,
};

export const sendLoginRequest = createAsyncThunk(
   'api/login',
   async (user: UserInfo) => {
      const res = await loginRequest(user);
      return res;
   }
);

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
      logout: state => {
         state.isLoggedIn = false;
         state.user = {
            userName: '',
            email: '',
            token: '',
         };
      },
   },
   extraReducers: builder => {
      builder.addCase(sendLoginRequest.pending, state => {
         state.loading = true;
      });
      builder.addCase(sendLoginRequest.fulfilled, (state, action) => {
         state.loading = false;
         state.isLoggedIn = true;
         state.user.email = action.payload;
      });
   },
});

export const selectLogin = (state: RootState) => state.login.isLoggedIn;

export const selectUser = (state: RootState) => state.login.user;

export const selectLoading = (state: RootState) => state.login.loading;

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
