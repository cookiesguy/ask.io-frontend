import { User } from 'interface';
import { baseUrl } from 'config/api';
import { fetchApi } from 'utils/apiCall';
export async function sendLoginRequest(user: User) {
   const data = await fetchApi(`${baseUrl}/auth/login`, 'POST', null, user);
   console.log('token', data);

   return data;
}
