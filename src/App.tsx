import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginContainer from 'containers/login';
import { HomeContainer } from 'containers/home';
import './globalStyle.css';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/" component={HomeContainer} />
               <Route path="/login" component={LoginContainer} />
               <Route path="/users" />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
