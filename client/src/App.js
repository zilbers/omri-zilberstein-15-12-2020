import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Received from './pages/Received';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/list'>
            <List />
          </Route>
          <Route exact path='/received'>
            <Received />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
