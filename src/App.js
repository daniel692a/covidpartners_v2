import HeaderApp from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Data from './pages/Data/Data';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <HeaderApp />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/consult">
          <Data />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
