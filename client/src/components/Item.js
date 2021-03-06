import styled from 'styled-components';
import close from '../assets/close.png';

const ItemContainer = styled.div`
  width: 80%;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  select {
    text-align: center;
    text-align-last: center;
    margin-left: 4px;
  }
  img {
    width: 18px;
    margin: 2px;
    justify-self: end;
  }
  img:hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`;

function Item({
  order,
  title,
  onClick,
  handleCoinChange,
  index,
  capitalize,
  remove,
}) {
  return (
    <>
      <ItemContainer>
        <div onClick={remove}>
          <img src={close} alt='remove item' />
        </div>
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
        {title === 'received' ? 'Not Received' : 'Received'}
      </button>
    </>
  );
}

export default Item;
