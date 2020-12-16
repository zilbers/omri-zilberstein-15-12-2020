import React from 'react';
import styled from 'styled-components';
import useDetectOutside from '../hooks/useDetectOutside';

const ModalContainer = styled.div`
  position: fixed;
  top: 30%;
  width: 40%;
  max-width: 550px;
  min-width: 320px;
  background: white;
  border: ${({ show }) => (show ? '1px solid #ccc' : '0')};
  transition: 0.5s ease-out;
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

  return (
    <ModalContainer show={show} ref={wrapperRef}>
      {show && children}
    </ModalContainer>
  );
}

export default Modal;
