import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { TOKEN_KEY } from 'config/constants';
import { UserInfo } from 'interface';
import { setItem, removeItem } from 'utils/storeRage';
import { loginThunk, getUserThunk } from './thunk';

interface LoginState {
   isLoggedIn: boolean;
   user: UserInfo;
   loading: boolean;
}

const initialState: LoginState = {
   isLoggedIn: false,
   user: {
      id: '',
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
         removeItem(TOKEN_KEY);
         state.loading = false;
      },
      makeLoading: state => {
         state.loading = true;
      },
   },

   extraReducers: builder => {
      builder.addCase(loginThunk.pending, state => {
         state.loading = true;
      });
      builder.addCase(loginThunk.fulfilled, (state, action) => {
         const { userInfo, access_token } = action.payload;

         state.loading = false;
         setItem(TOKEN_KEY, access_token);
         state.user = {
            id: userInfo._id,
            userName: userInfo.name,
            email: userInfo.email,
            imageUrl: userInfo.imageUrl,
            token: access_token,
         };
         state.isLoggedIn = true;
      });

      builder.addCase(getUserThunk.pending, state => {
         state.loading = true;
      });

      builder.addCase(getUserThunk.fulfilled, (state, action) => {
         const { email, imageUrl, name, _id } = action.payload;
         const { arg } = action.meta;
         state.loading = false;
         state.user = {
            id: _id,
            userName: name,
            email: email,
            imageUrl: imageUrl,
            token: arg,
         };
         state.isLoggedIn = true;
      });
   },
});

export const selectLogin = (state: RootState) => state.login.isLoggedIn;

export const selectUser = (state: RootState) => state.login.user;

export const selectLoading = (state: RootState) => state.login.loading;

export const { logout, makeLoading } = loginSlice.actions;

export default loginSlice.reducer;
