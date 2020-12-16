import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 80%;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

function Item({ order, title, onClick, handleCoinChange, index, capitalize }) {
  return (
    <>
      <ItemContainer>
        <div>
          <span>Name:</span>{' '}
          {order.name && <span> {capitalize(order.name)}</span>}
        </div>
        <div>
          <span>Online Store:</span>
          {order.onlineStore && <span> {capitalize(order.onlineStore)}</span>}
        </div>
        <div>
          <span>Price:</span>
          <span>
            {Math.round(order.price.value * 100) / 100}
            <select
              value={order.price.coin}
              onChange={({ target }) => handleCoinChange(target.value, index)}
            >
              <option value='ils'>ils</option>
              <option value='dollar'>dollar</option>
            </select>
          </span>
        </div>
        <div>
          <span>ETA:</span> <span>{order.eta}</span>
        </div>
      </ItemContainer>

      <button onClick={() => onClick()}>
        {title === 'Received' ? 'Not Received' : 'Received'}
      </button>
    </>
  );
}

export default Item;
