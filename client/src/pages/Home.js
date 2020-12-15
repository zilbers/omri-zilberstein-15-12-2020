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

function Home({ orders, setOrders, show, setShow, handleModal }) {
  const history = useHistory();

  return (
    <HomeContainer>
      <h1>Home</h1>
      <CardsContainer>
        {orders.length > 0 ? (
          <>
            <Card
              grow={1}
              title='Your tracking list'
              content='See your waiting list'
              onClick={() => history.push('/list')}
            />
            <Card
              grow={1}
              title='Received'
              content='See the history of your orders'
              onClick={() => history.push('/received')}
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
            <Modal show={show} handleModal={handleModal}>
              <Form setOrders={setOrders} setShow={setShow} />
            </Modal>
          </>
        )}
      </CardsContainer>
    </HomeContainer>
  );
}

export default Home;
