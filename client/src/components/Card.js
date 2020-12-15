import styled from 'styled-components';

const CardContainer = styled.div`
  flex-grow: ${({ grow }) => grow};
  background: white;
  border: 1px solid #ccc;
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
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

function Card({ title, content, grow, onClick }) {
  return (
    <CardContainer grow={grow} onClick={() => onClick()}>
      <h1>{title}</h1>
      <p>{content}</p>
    </CardContainer>
  );
}

export default Card;
