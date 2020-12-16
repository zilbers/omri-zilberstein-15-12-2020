import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Home from './pages/Home';
import Header from './components/AppBar';
import Modal from './components/Modal';
import Form from './components/Form';
import bg from './assets/bg-image.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [show, setShow] = React.useState({ settings: false, form: false });

  const handleModal = (prop) => {
    setShow((prev) => ({ ...prev, [prop]: !prev[prop] }));
  };

  const handleOrderState = (setA, setB, item, index) => {
    setA((prev) => {
      prev.splice(index, 1);
      return prev;
    });
    setB((prev) => [...prev, item]);
  };

  return (
    <Router>
      <AppContainer>
        {(show.form || show.settings) && <Shadow />}
        <Header
          length={orders.length + received.length}
          handleModal={handleModal}
        />
        <Switch>
          <Route exact path='/list'>
            <List
              orders={orders}
              setA={setOrders}
              setB={setReceived}
              handleOrderState={handleOrderState}
              show={show}
              title='On the way'
            />
          </Route>
          <Route exact path='/received'>
            <List
              orders={received}
              setA={setReceived}
              setB={setOrders}
              handleOrderState={handleOrderState}
              show={show}
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
        <Modal show={show.form} handleModal={handleModal} setShow={setShow}>
          <Form setOrders={setOrders} setShow={setShow} />
        </Modal>
        <Modal
          show={show.settings}
          handleModal={handleModal}
          setShow={setShow}
        ></Modal>
      </AppContainer>
    </Router>
  );
}

export default App;
