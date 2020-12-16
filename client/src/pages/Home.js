import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Form from '../components/Form';
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

function Home({ orders, received, setOrders, show, setShow, handleModal }) {
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
              disabled={orders.length === 0}
            />
            <Card
              grow={1}
              title='Received'
              content='See the history of your orders'
              onClick={() => history.push('/received')}
              disabled={received.length === 0}
            />
          </>
        ) : (
          <>
            {!show && (
              <Card
                grow={1}
                title='Get Started'
                content='Add an item to your waiting list'
                onClick={handleModal}
              />
            )}
            <Modal show={show} handleModal={handleModal} setShow={setShow}>
              <Form setOrders={setOrders} setShow={setShow} />
            </Modal>
          </>
        )}
      </CardsContainer>
    </HomeContainer>
  );
}

export default Home;
