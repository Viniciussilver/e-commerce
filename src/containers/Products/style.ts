import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
`;

export const RowList = styled.div`
  display: flex;
  justify-content: center;
  /* ::-webkit-scrollbar {
    display: none;
  }*/
`;

export const ListArea = styled.div`
  display: flex;
  gap: 10px;
  overflow: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 6px 0;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 620px) {
    width: 365px;
  }
`;

export const ButtonCategory = styled.div<{ active: boolean }>`
  padding: 8px 12px;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  background-color: ${({ active }) => (active ? '#000' : 'transparent')};
  border-radius: 20px;
  border: 2px solid #000;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const ContainerItems = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  gap: 60px;
  margin-top: 40px;
`;
