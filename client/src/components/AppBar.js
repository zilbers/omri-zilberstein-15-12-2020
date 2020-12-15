import { Link, useLocation } from 'react-router-dom';
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
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;

function AppBar() {
  const location = useLocation();

  return (
    <Container url={location.pathname}>
      <Header>Shopping Tracking List</Header>
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
      </List>
    </Container>
  );
}

export default AppBar;
