import HeaderApp from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Data from './pages/Data/Data';
import Dashboard from './pages/Dashboard/Dashboard';
import Map from './pages/Map/Map';

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
        <Route path="/map-view">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
