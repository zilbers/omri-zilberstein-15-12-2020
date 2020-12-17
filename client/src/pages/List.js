import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Item from '../components/Item';
import styled from 'styled-components';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AggregatedValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
`;

function List({
  orders,
  setA,
  setB,
  handleOrderState,
  title,
  show,
  exchangeRates,
}) {
  const history = useHistory();
  const [aggregatedValues, setAggregationValues] = useState([]);

  const handleCoinChange = (value, index) => {
    exchangeRates.rates &&
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

  const remove = (index, setter, type) => {
    setter((prev) => {
      prev.splice(index, 1);
      localStorage.setItem(type, JSON.stringify(prev));
      return prev;
    });
  };

  useEffect(() => {
    if (orders.length === 0) {
      history.push('/');
    } else {
      const counts = orders.reduce(
        (count, { onlineStore: key }) => (
          (count[capitalize(key)] = (count[capitalize(key)] || 0) + 1), count
        ),
        {}
      );
      const arr = Object.keys(counts).map((key) => ({
        onlineStore: key,
        count: counts[key],
      }));
      setAggregationValues(arr);
    }
  }, [orders, orders.length, history]);

  return (
    <ListContainer>
      <h1>{title}</h1>
      {orders.map((order, index) => (
        <Card grow={1} key={index} disabled={show.form || show.settings}>
          <Item
            title={title}
            order={order}
            handleCoinChange={handleCoinChange}
            index={index}
            capitalize={capitalize}
            onClick={() => handleOrderState(setA, setB, orders[index], index)}
            remove={() => remove(index, setA, title)}
          />
        </Card>
      ))}
      <Card grow={1} disabled={show.form || show.settings}>
        <h3>{title} by store</h3>
        <AggregatedValuesContainer>
          <div>
            <span>Store:</span>
            <span>Orders:</span>
          </div>
          {aggregatedValues.map((value, index) => (
            <div key={index}>
              <span>{value.onlineStore}</span>
              <span>{value.count}</span>
            </div>
          ))}
        </AggregatedValuesContainer>
      </Card>
    </ListContainer>
  );
}

export default List;
