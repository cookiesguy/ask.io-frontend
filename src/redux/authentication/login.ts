import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { setItem } from 'utils/storeRage';
import { loginThunk } from './thunk';

export type UserInfo = {
   userName: string;
   email: string;
   imageUrl: string;
   token: string;
};

interface LoginState {
   isLoggedIn: boolean;
   user: UserInfo;
   loading: boolean;
}

const initialState: LoginState = {
   isLoggedIn: false,
   user: {
      userName: '',
      email: '',
      token: '',
      imageUrl: '',
   },
   loading: false,
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      logout: state => {
         state.isLoggedIn = false;
         state.user = initialState.user;
      },
      login: (state, action) => {},
   },

   extraReducers: builder => {
      builder.addCase(loginThunk.pending, state => {
         state.loading = true;
      });
      builder.addCase(loginThunk.fulfilled, (state, action) => {
         const { userInfo, access_token } = action.payload;
         state.loading = false;
         setItem('token', access_token);
         state.user = {
            userName: userInfo.name,
            email: userInfo.email,
            imageUrl: userInfo.imageUrl,
            token: access_token,
         };
         state.isLoggedIn = true;
      });
   },
});

export const selectLogin = (state: RootState) => state.login.isLoggedIn;

export const selectUser = (state: RootState) => state.login.user;

export const selectLoading = (state: RootState) => state.login.loading;

export const { logout, login } = loginSlice.actions;

export default loginSlice.reducer;
