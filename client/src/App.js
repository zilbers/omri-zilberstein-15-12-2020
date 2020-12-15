import React from 'react';
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

const Shadow = styled.div`
  position: absolute;
  background: black;
  opacity: 0.6;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [orders, setOrders] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <Router>
      <AppContainer>
        {show && <Shadow />}
        <Header />
        <Switch>
          <Route exact path='/list'>
            <List />
          </Route>
          <Route exact path='/received'>
            <Received />
          </Route>
          <Route exact path='/'>
            <Home
              orders={orders}
              setOrders={setOrders}
              show={show}
              setShow={setShow}
              handleModal={handleModal}
            />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
