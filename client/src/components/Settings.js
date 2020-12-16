import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Settings({ cooldown, setCooldown }) {
  const [values, setValues] = React.useState({
    cooldown,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCooldown(() => e.target.value);
  };

  const handleChange = (value, prop) => {
    setValues((prev) => ({ ...prev, [prop]: value }));
  };
  return (
    <SettingsContainer>
      <h2>Settings</h2>
      <form className='content' onSubmit={handleSubmit}>
        <label>
          Cooldown:
          <input
            type='number'
            name='cooldown'
            value={values.cooldown}
            onChange={({ target }) => handleChange(target.value, 'cooldown')}
          />
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
