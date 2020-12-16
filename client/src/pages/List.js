import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Item from '../components/Item';

function List({ orders, setA, setB, handleOrderState, title, show }) {
  const history = useHistory();
  const [exchangeRates, setExchangeRates] = useState({});

  const handleCoinChange = (value, index) => {
    setA((prev) => {
      if (prev[index].price.coin !== value) {
        prev[index].price.value =
          value === 'dollar'
            ? prev[index].price.value * (1 / exchangeRates.rates.ILS)
            : prev[index].price.value * exchangeRates.rates.ILS;
      }
      prev[index].price.coin = value;
      return prev.slice();
    });
  };

  useEffect(() => {
    if (orders.length === 0) history.push('/');
  }, [orders.length, history]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS')
        .then((response) => response.json())
        .then((data) => setExchangeRates(data));
    }, 1000 * 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {orders.map((order, index) => (
        <Card grow={1} key={index} disabled={show}>
          <Item
            title={title}
            order={order}
            handleCoinChange={handleCoinChange}
            index={index}
            onClick={() => handleOrderState(setA, setB, orders[index], index)}
          />
        </Card>
      ))}
    </div>
  );
}

export default List;
