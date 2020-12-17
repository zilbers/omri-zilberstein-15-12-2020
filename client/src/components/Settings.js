import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
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
  const theme = React.useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCooldown(() => values.cooldown);
    setShow((prev) => ({ ...prev, settings: false }));
  };

  const handleChange = (value, prop) => {
    setValues((prev) => ({ ...prev, [prop]: value }));
  };

  const handleTheme = (e) => {
    e.preventDefault();
    theme.changeTheme();
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
          <button onClick={handleTheme}>Change Theme</button>
          <button type='submit' value='Submit'>
            Save
          </button>
        </div>
      </form>
    </SettingsContainer>
  );
}

export default Settings;
