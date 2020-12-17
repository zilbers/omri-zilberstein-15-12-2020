import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useHistory } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function Home({ orders, received, show, handleModal }) {
  const history = useHistory();

  return (
    <HomeContainer>
      <h1>Home</h1>
      <CardsContainer>
        {orders.length > 0 || received.length > 0 ? (
          <>
            <Card
              grow={1}
              title='Tracking List'
              content='See your pending items'
              onClick={() => history.push('/list')}
              disabled={orders.length === 0 || show.form || show.settings}
            />
            <Card
              grow={1}
              title='Received'
              content='See the history of your orders'
              onClick={() => history.push('/received')}
              disabled={received.length === 0 || show.form || show.settings}
            />
            <Card
              grow={1}
              title='Statistics'
              content='Get analytics of your orders'
              onClick={() => history.push('/statistics')}
              disabled={show.form || show.settings}
            />
          </>
        ) : (
          <>
            {!(show.form || show.settings) && (
              <Card
                grow={1}
                title='Get Started'
                content='Add an item to your waiting list'
                onClick={() => handleModal('form')}
              />
            )}
          </>
        )}
      </CardsContainer>
    </HomeContainer>
  );
}

export default Home;
