import React from 'react';
import styled from 'styled-components';
import useDetectOutside from '../hooks/useDetectOutside';

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 400px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  h2 {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #ccc;
    padding: 1rem;
    margin: 0;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    label {
      display: flex;
      justify-content: space-between;
    }
    input {
      margin: 5px;
    }
  }
  .actions {
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
    button {
      border: 0;
      background: #78f89f;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      line-height: 1;
    }
  }
`;

function Modal({ show, setShow, children }) {
  const wrapperRef = React.useRef(null);
  useDetectOutside(wrapperRef, setShow);

  return show ? (
    <ModalContainer ref={wrapperRef}>{children}</ModalContainer>
  ) : (
    <> </>
  );
}

export default Modal;
