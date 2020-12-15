import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const history = useHistory();

  return (
    <HomeContainer>
      <h1>Home</h1>
      <CardsContainer>
        <Card grow={1} title='test' content='test' />
        <Card grow={1} title='test' content='test' />
      </CardsContainer>
      <button onClick={() => history.push('/list')}>Start</button>
    </HomeContainer>
  );
}

export default Home;
