import styled from 'styled-components';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Statistics({ title }) {
  return (
    <StatisticsContainer>
      <h1>{title}</h1>
    </StatisticsContainer>
  );
}

export default Statistics;
