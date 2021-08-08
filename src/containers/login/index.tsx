import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Login } from 'components/login';
import { logout, selectLoading, selectLogin } from 'redux/authentication/login';
import { loginThunk } from 'redux/authentication/thunk';
import { User } from 'interface';

export default function LoginContainer() {
   const dispatch = useAppDispatch();
   const isLoggedIn = useAppSelector(selectLogin);
   const isLoading = useAppSelector(selectLoading);

   const dispatchLogin = (user: User) => {
      dispatch(loginThunk(user));
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
      />
   );
}
