import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const CardContainer = styled.div`
  flex-grow: ${({ grow }) => grow};
  background: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
  border: 1px solid ${({ darkMode }) => (darkMode ? 'gray' : 'white')};
  transition: 0.3s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  min-width: 350px;
  max-width: 600px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ disabled }) =>
    disabled
      ? `pointer-events: none;
  opacity: 0.5;`
      : ''}
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  label {
    display: flex;
    justify-content: space-between;
  }
  input {
    margin: 5px;
  }
  button {
    border: 0;
    background: #78f89f;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
    margin: 5px;
  }
  button:hover {
    transform: scale(1.06);
  }
  select {
    background: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
    color: ${({ darkMode }) => (darkMode ? '#68d999' : 'black')};
  }
`;

function Card({ title, content, grow, onClick, children, disabled }) {
  const theme = React.useContext(ThemeContext);

  return (
    <CardContainer
      grow={grow}
      disabled={disabled}
      onClick={() => (onClick ? onClick() : '')}
      darkMode={theme.darkMode}
    >
      {title && <h1>{title}</h1>}
      {content && <p>{content}</p>}
      {children}
    </CardContainer>
  );
}

export default Card;
