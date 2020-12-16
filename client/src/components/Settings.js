import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 50px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  background: red;
  border-radius: 10px;
`;

function Settings({ cooldown, setCooldown, setShow, error }) {
  const [values, setValues] = React.useState({
    cooldown,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCooldown(() => values.cooldown);
    setShow((prev) => ({ ...prev, settings: false }));
  };

  const handleChange = (value, prop) => {
    setValues((prev) => ({ ...prev, [prop]: value }));
  };
  return (
    <SettingsContainer>
      <h2>Settings</h2>
      {error.value && <ErrorContainer>{error.message}</ErrorContainer>}
      <form className='content' onSubmit={handleSubmit}>
        <label>
          Cooldown:
          <input
            type='number'
            name='cooldown'
            value={values.cooldown}
            onChange={({ target }) => handleChange(target.value, 'cooldown')}
          />
          sec
        </label>

        <div className='actions'>
          <button type='submit' value='Submit'>
            Submit
          </button>
        </div>
      </form>
    </SettingsContainer>
  );
}

export default Settings;
