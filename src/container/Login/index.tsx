import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Login } from 'components/Login';
import {
   logout,
   selectLoading,
   selectLogin,
   sendLoginRequest,
} from 'redux/login/loginSlice';

export default function LoginContainer() {
   const dispatch = useAppDispatch();
   const isLoggedIn = useAppSelector(selectLogin);
   const isLoading = useAppSelector(selectLoading);

   const dispatchLogin = () => {
      dispatch(
         sendLoginRequest({
            userName: 'abc',
            email: 'xyz@bcc',
            token: 'abcd',
         })
      );
   };

   const dispatchLogout = () => {
      dispatch(logout());
   };

   return (
      <Login
         isLoading={isLoading}
         isLoggedIn={isLoggedIn}
         dispatchLogin={dispatchLogin}
         dispatchLogout={dispatchLogout}
      ></Login>
   );
}
