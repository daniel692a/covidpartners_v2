import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import Data from './pages/Data/Data';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/consult">
          <Data />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
