import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'interface';
import { sendLoginRequest } from './api';

export const loginThunk = createAsyncThunk('api/login', async (user: User) => {
   const data = await sendLoginRequest(user);
   return data;
});
