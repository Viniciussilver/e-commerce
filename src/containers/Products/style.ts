import styled from 'styled-components'

import { HiOutlineSearch } from 'react-icons/hi'

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.default};
`

export const RowList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* ::-webkit-scrollbar {
    display: none;
  }*/
`

export const ListArea = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 15px;
  overflow: auto;
  scroll-behavior: smooth;
  padding: 6px 0;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 620px) {
    width: 365px;
  }
`

export const ButtonCategory = styled.div<{ active: boolean }>`
  padding: 8px 12px;
  color: ${props =>
    props.theme.title === 'dark'
      ? props.active
        ? '#fff'
        : '#fff'
      : props.active
      ? '#fff'
      : '#000'};
  background-color: ${({ active }) => (active ? '#000' : 'transparent')};
  border-radius: 20px;
  border: 2px solid #000;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const ContainerItems = styled.div`
  max-width: 1460px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  gap: 60px;
  margin-top: 40px;
`

export const ChargingBox = styled.div`
  position: absolute;
  top: 330px;
  left: 50%;
  right: 50%;

  @media (max-width: 450px) {
    left: 45%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  outline: none;
  background: transparent;
  border: none;
  color: #383f51;
  font-size: 17.8px;
  font-weight: 500;
  letter-spacing: 0.3px;
`

export const ButtonSearch = styled.button`
  width: 55px;
  height: 100%;
  position: relative;
  border: none;
  background-color: #0058a1;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`

export const IconSearch = styled(HiOutlineSearch)`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 8.5px;
`

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  min-width: 400px;
  border-radius: 2px;
  background-color: #eeeeee;
`
