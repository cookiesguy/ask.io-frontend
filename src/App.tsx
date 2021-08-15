import { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { selectLogin } from 'redux/authentication/login';
import LoginContainer from 'containers/login';
import { HomeContainer } from 'containers/home';
import './globalStyle.css';

function App() {
   const isLoggedIn = useAppSelector(selectLogin);
   const history = useHistory();
   useEffect(() => {
      if (isLoggedIn) {
         history.push('/');
      } else {
         history.push('/login');
      }
   }, [isLoggedIn, history]);

   return (
      <div className="App">
         <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/login" component={LoginContainer} />
         </Switch>
      </div>
   );
}

export default App;
