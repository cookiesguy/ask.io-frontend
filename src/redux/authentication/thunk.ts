import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'interface';
import { getLoggedInUser, sendLoginRequest } from './api';

export const loginThunk = createAsyncThunk('login', async (user: User) => {
   const data = await sendLoginRequest(user);
   return data;
});

export const getUserThunk = createAsyncThunk(
   'profile',
   async (token: string) => {
      const data = await getLoggedInUser(token);
      return data;
   }
);
