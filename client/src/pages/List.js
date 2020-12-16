import Card from '../components/Card';
import Item from '../components/Item';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function List({ orders, setA, setB, handleOrderState, title, show }) {
  const history = useHistory();

  const handleCoinChange = (value, index) => {
    console.log(orders);
    setA((prev) => {
      prev[index].price.coin = value;
      return prev.slice();
    });
  };

  useEffect(() => {
    if (orders.length === 0) history.push('/');
  }, [orders.length, history]);

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
