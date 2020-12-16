import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List';
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
  const [received, setReceived] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const handleOrderState = (setA, setB, item, index) => {
    setA((prev) => {
      prev.splice(index - 1, 1);
      return prev;
    });
    setB((prev) => [...prev, item]);
  };

  return (
    <Router>
      <AppContainer>
        {show && <Shadow />}
        <Header length={orders.length} />
        <Switch>
          <Route exact path='/list'>
            <List
              orders={orders}
              setA={setOrders}
              setB={setReceived}
              handleOrderState={handleOrderState}
              title='List'
            />
          </Route>
          <Route exact path='/received'>
            <List
              orders={received}
              setA={setReceived}
              setB={setOrders}
              handleOrderState={handleOrderState}
              title='Received'
            />
          </Route>
          <Route exact path='/'>
            <Home
              orders={orders}
              received={received}
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
