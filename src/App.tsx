import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectLogin } from 'redux/authentication/login';
import { getUserThunk } from 'redux/authentication/thunk';
import LoginContainer from 'containers/login';
import { HomeContainer } from 'containers/home';
import { getItem } from 'utils/storeRage';
import { TOKEN_KEY } from 'config/constants';
import './globalStyle.css';

function App() {
   const dispatch = useAppDispatch();
   const isLoggedIn = useAppSelector(selectLogin);
   const history = useHistory();
   useEffect(() => {
      const token = getItem(TOKEN_KEY);
      if (token) {
         dispatch(getUserThunk(token));
      } else {
         history.push('/login');
      }
   }, [dispatch, history, isLoggedIn]);

   return (
      <Switch>
         {isLoggedIn && <Route exact path="/" component={HomeContainer} />}
         <Route path="/login" component={LoginContainer} />
      </Switch>
   );
}

export default App;
