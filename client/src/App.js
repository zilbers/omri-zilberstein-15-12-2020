import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Received from './pages/Received';
import Home from './pages/Home';
import Header from './components/AppBar';
import styled from 'styled-components';
import bg from './assets/bg-image.jpg';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bg});
`;

function App() {
  return (
    <Router>
      <AppContainer>
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
      </AppContainer>
    </Router>
  );
}

export default App;
