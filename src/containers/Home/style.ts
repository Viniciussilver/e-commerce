import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  @media screen and (max-width: 895px) {
    background-color: ${props =>
      props.theme.title === 'light' ? '#fff' : '#A9BCD0'};
  }
`;
