import { Link, useLocation } from 'react-router-dom';
import addItem from '../assets/add-item.svg';
import settings from '../assets/settings.svg';
import styled from 'styled-components';

const Container = styled.nav`
  width: 96%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ url }) => (url === '/' ? 'none' : 'white')};
  background-repeat: 'no-repeat';
  background-size: 'cover';
  padding: 0 2% 0 2%;
  a {
    text-decoration: none;
    color: black;
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
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;

function AppBar({ length, handleModal }) {
  const location = useLocation();

  return (
    <Container url={location.pathname}>
      <Header>
        <Link to='/'>Shopping Tracking List</Link>
      </Header>
      {length > 0 && (
        <List>
          {location.pathname !== '/' && (
            <li>
              <Link to='/'>Home</Link>
            </li>
          )}
          {location.pathname !== '/list' && (
            <li>
              <Link to='/list'>List</Link>
            </li>
          )}
          {location.pathname !== '/received' && (
            <li>
              <Link to='/received'>Received</Link>
            </li>
          )}
          <img src={addItem} alt='add item' onClick={handleModal} />
          <img src={settings} alt='settings' />
        </List>
      )}
    </Container>
  );
}

export default AppBar;
