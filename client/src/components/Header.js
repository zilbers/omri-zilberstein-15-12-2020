import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  width: 96%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ url }) => (url === '/' ? 'none' : 'gray')};
  padding: 0 2% 0 2%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;

function Header() {
  const location = useLocation();

  return (
    <Container url={location.pathname}>
      <h2>Shopping Tracking List</h2>
      <List>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/list'>List</Link>
        </li>
        <li>
          <Link to='/received'>Received</Link>
        </li>
      </List>
    </Container>
  );
}

export default Header;
