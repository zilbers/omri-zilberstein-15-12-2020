function List({ order, title, onClick, handleCoinChange, index }) {
  return (
    <>
      <span>Name: {order.name}</span>
      <span>Online Store: {order.onlineStore}</span>
      <span>
        Price: {order.price.value}
        <select
          value={order.price.coin}
          onChange={({ target }) => handleCoinChange(target.value, index)}
        >
          <option value='ils'>ils</option>
          <option value='dollar'>dollar</option>
        </select>
      </span>
      <span>ETA: {order.eta}</span>
      <button onClick={() => onClick()}>
        {title === 'Received' ? 'Not Received' : 'Received'}
      </button>
    </>
  );
}

export default List;
