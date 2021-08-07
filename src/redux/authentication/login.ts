import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export type UserInfo = {
   userName: string;
   email: string;
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
   },
   loading: false,
};

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
      login: (state, action) => {},
   },
});

export const selectLogin = (state: RootState) => state.login.isLoggedIn;

export const selectUser = (state: RootState) => state.login.user;

export const selectLoading = (state: RootState) => state.login.loading;

export const { logout, login } = loginSlice.actions;

export default loginSlice.reducer;
