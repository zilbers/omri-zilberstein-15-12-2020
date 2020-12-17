import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import addItem from '../assets/add-item.svg';
import settings from '../assets/settings.svg';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-repeat: 'no-repeat';
  background-size: 'cover';
  background: ${({ darkMode }) =>
    darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
  a {
    text-decoration: none;
    color: ${({ darkMode }) => (darkMode ? '#68d999' : 'black')};
    border-radius: 5px;
    transition: 0.3s ease-out;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  list-style-type: none;
  img {
    width: 24px;
    background: ${({ darkMode }) => (darkMode ? '#68d999' : 'none')};
    border-radius: 5px;
    padding: 1px;
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .settings {
    ${({ error }) => error && `background: 'red'`};}
  }
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;

function AppBar({ length, handleModal, error }) {
  const theme = React.useContext(ThemeContext);
  const location = useLocation();

  return (
    <Container url={location.pathname} darkMode={theme.darkMode}>
      <Header>
        <Link to='/'>Shopping Tracking List</Link>
      </Header>
      {length > 0 && (
        <List error={error} darkMode={theme.darkMode}>
          <img
            src={addItem}
            alt='add item'
            onClick={() => handleModal('form')}
          />
          <img
            src={settings}
            alt='settings'
            className='settings'
            onClick={() => handleModal('settings')}
          />
        </List>
      )}
    </Container>
  );
}

export default AppBar;
