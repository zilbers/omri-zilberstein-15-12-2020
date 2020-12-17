import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  #price {
    width: 36%;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

function Form({ setShow, setOrders }) {
  const [values, setValues] = React.useState({
    name: '',
    onlineStore: '',
    price: { value: 0, coin: 'ils' },
    eta: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders((prev) => {
      const newOrders = [...prev, values];
      localStorage.setItem('orders', JSON.stringify(newOrders));
      return newOrders;
    });
    setShow((prev) => ({ ...prev, form: false }));
  };

  const handleChange = (value, prop) => {
    setValues((prev) => ({ ...prev, [prop]: value }));
  };
  return (
    <FormContainer>
      <h2>New Entrie</h2>
      <form className='content' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='itemName'
            value={values.name}
            onChange={({ target }) => handleChange(target.value, 'name')}
          />
        </label>
        <label>
          Online Store:
          <input
            type='text'
            name='onlineStore'
            value={values.onlineStore}
            onChange={({ target }) => handleChange(target.value, 'onlineStore')}
          />
        </label>
        <label>
          Price:
          <span>
            <input
              type='number'
              name='price'
              id='price'
              value={values.price.value}
              min={0}
              onChange={({ target }) =>
                handleChange(
                  { value: target.value, coin: values.price.coin },
                  'price'
                )
              }
            />
            <select
              value={values.price.coin}
              onChange={({ target }) =>
                handleChange(
                  { coin: target.value, value: values.price.value },
                  'price'
                )
              }
            >
              <option value='ils'>ils</option>
              <option value='dollar'>dollar</option>
            </select>
          </span>
        </label>
        <label>
          ETA:
          <input
            type='date'
            name='eta'
            value={values.eta}
            onChange={({ target }) => handleChange(target.value, 'eta')}
          />
        </label>
        <div className='actions'>
          <button type='submit' value='Submit'>
            Submit
          </button>
        </div>
      </form>
    </FormContainer>
  );
}

export default Form;
