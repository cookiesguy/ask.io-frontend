import { UserInfo } from './loginSlice';

export function loginRequest(user: UserInfo) {
   return new Promise<string>(resolve =>
      setTimeout(() => resolve('hello'), 500)
   );
}
