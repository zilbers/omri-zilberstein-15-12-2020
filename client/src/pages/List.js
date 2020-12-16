import Card from '../components/Card';

function List({ orders, setA, setB, handleOrderState, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {orders.map((order, index) => (
        <Card
          grow={1}
          onClick={() => handleOrderState(setA, setB, orders[index], index)}
          key={index}
        >
          <span>Name: {order.name}</span>
          <span>Online Store: {order.onlineStore}</span>
          <span>Price: {order.price}</span>
          <span>ETA: {order.eta}</span>
        </Card>
      ))}
    </div>
  );
}

export default List;
