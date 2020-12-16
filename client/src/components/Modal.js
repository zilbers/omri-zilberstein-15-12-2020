import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import useDetectOutside from '../hooks/useDetectOutside';

const ModalContainer = styled.div`
  position: fixed;
  top: 30%;
  width: 40%;
  max-width: 550px;
  min-width: 320px;
  background: ${({ darkMode }) => (darkMode ? '#1a1a1a' : 'white')};
  border: ${({ show }) => (show ? '1px solid gray' : '0')};
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
      align-items: center;
      justify-content: space-between;
    }
    input {
      margin: 5px;
      padding: 5px;
      border: 0;
      color: ${({ darkMode }) => (darkMode ? '#68d999' : `black`)};
      background: ${({ darkMode }) => (darkMode ? 'black' : '#ccc')};
    }
    select {
      margin: 5px;
      padding: 5px;
      text-align: center;
      text-align-last: center;
      background: ${({ darkMode }) => (darkMode ? 'black' : '#ccc')};
      color: ${({ darkMode }) => (darkMode ? '#68d999' : `black`)};
      border: 0;
    }
  }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #ccc;
    background: ${({ darkMode }) => (darkMode ? '#1a1a1a' : '#eee')};
    padding: 0.5rem 1rem;
    button {
      border: 0;
      background: #78f89f;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      line-height: 1;
      margin: 4px;
    }
  }
`;

function Modal({ show, setShow, children }) {
  const wrapperRef = React.useRef(null);
  const theme = React.useContext(ThemeContext);

  useDetectOutside(wrapperRef, setShow);

  return (
    <ModalContainer show={show} ref={wrapperRef} darkMode={theme.darkMode}>
      {show && children}
    </ModalContainer>
  );
}

export default Modal;
