import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
`

export const RowList = styled.div`
  overflow: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 6px 0;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 620px) {
    width: 380px;
  }
`

export const ListArea = styled.div`
  display: flex;
  gap: 10px;
`

export const ButtonCategory = styled.div<{ active: boolean }>`
  padding: 9px 14px;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  background-color: ${({ active }) => (active ? '#000' : 'transparent')};
  border-radius: 20px;
  border: 2px solid #000;
  cursor: pointer;
  font-weight: 400;
  font-size: 17px;
  transform: scale(0.9);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`

export const ContainerItems = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 40px;
`
