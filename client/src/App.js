import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import List from './pages/List';
import Home from './pages/Home';
import Header from './components/AppBar';
import Modal from './components/Modal';
import Form from './components/Form';
import Settings from './components/Settings';
import bg from './assets/bg-image.jpg';
import darkBg from './assets/dark-bg-image.jpg';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: ${({ darkMode }) => (darkMode ? '#68d999' : `black`)};
  background-image: ${({ darkMode }) =>
    darkMode ? `url(${darkBg})` : `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
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
  const [cooldown, setCooldown] = React.useState(10);
  const [error, setError] = React.useState(false);
  const [exchangeRates, setExchangeRates] = React.useState({});
  const [show, setShow] = React.useState({ settings: false, form: false });

  const theme = React.useContext(ThemeContext);

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS')
        .then((response) => response.json())
        .then((data) => {
          setError({ value: false });
          setExchangeRates(data);
        })
        .catch((message) => setError({ message, value: true }));
    }, 1000 * cooldown);
    return () => clearInterval(interval);
  }, [cooldown]);

  return (
    <Router>
      <AppContainer darkMode={theme.darkMode}>
        {(show.form || show.settings) && <Shadow />}
        <Header
          length={orders.length + received.length}
          handleModal={handleModal}
          error={error.value}
        />
        <Switch>
          <Route exact path='/list'>
            <List
              orders={orders}
              setA={setOrders}
              setB={setReceived}
              handleOrderState={handleOrderState}
              show={show}
              exchangeRates={exchangeRates}
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
              exchangeRates={exchangeRates}
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
        {show.form && (
          <Modal show={show.form} handleModal={handleModal} setShow={setShow}>
            <Form setOrders={setOrders} setShow={setShow} />
          </Modal>
        )}
        {show.settings && (
          <Modal
            show={show.settings}
            handleModal={handleModal}
            setShow={setShow}
          >
            <Settings
              cooldown={cooldown}
              setCooldown={setCooldown}
              setShow={setShow}
              error={error}
            />
          </Modal>
        )}
      </AppContainer>
    </Router>
  );
}

export default App;
