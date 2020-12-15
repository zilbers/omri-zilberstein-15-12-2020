import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Form({ setShow }) {
  const [values, setValues] = React.useState({
    name: '',
    onlineStore: '',
    price: 0,
    eta: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setShow((prev) => !prev);
  };

  const handleChange = (e, prop) => {
    setValues((prev) => ({ ...prev, [prop]: e.target.value }));
  };
  return (
    <FormContainer>
      <h2>New Entree</h2>
      <form className='content' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='itemName'
            value={values.name}
            onChange={(e) => handleChange(e, 'name')}
          />
        </label>
        <label>
          Online Store:
          <input
            type='text'
            name='onlineStore'
            value={values.onlineStore}
            onChange={(e) => handleChange(e, 'onlineStore')}
          />
        </label>
        <label>
          Price:
          <input
            type='number'
            name='price'
            value={values.price}
            onChange={(e) => handleChange(e, 'price')}
          />
        </label>
        <label>
          ETA:
          <input
            type='date'
            name='eta'
            value={values.eta}
            onChange={(e) => handleChange(e, 'eta')}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </FormContainer>
  );
}

export default Form;
