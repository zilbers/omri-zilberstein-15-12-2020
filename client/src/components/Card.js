import styled from 'styled-components';

const CardContainer = styled.div`
  flex-grow: ${({ grow }) => grow};
  border: 5px solid black;
  min-width: 350px;
  max-width: 600px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Card({ title, content, grow }) {
  return (
    <CardContainer grow={grow}>
      <h1>{title}</h1>
      <p>{content}</p>
    </CardContainer>
  );
}

export default Card;
