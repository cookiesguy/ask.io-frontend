import { User } from 'interface';
import { baseUrl } from 'config/api';
import { fetchApi, getApi } from 'utils/apiCall';
export async function sendLoginRequest(user: User) {
   const data = await fetchApi(`${baseUrl}/auth/login`, 'POST', null, user);
   console.log('token', data);

   return data;
}

export async function getLoggedInUser(token: string) {
   const data = await getApi(`${baseUrl}/auth/profile`, token);
   console.log('user', data);
   return data;
}
