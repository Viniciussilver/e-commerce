import styled from 'styled-components';

import { HiOutlineSearch } from 'react-icons/hi';

export const Container = styled.div`
  min-height: 100vh;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.default};

  .map {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1130px) {
    padding-top: 110px;
  }
`;

export const RowList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
  /* ::-webkit-scrollbar {
    display: none;
  }*/
`;

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
`;

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
  background-color: ${({ active }) => (active ? '#121214' : 'transparent')};
  border-radius: 20px;
  border: 2px solid #121214;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  white-space: nowrap;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #121214;
    color: #fff;
  }
`;

export const ContainerItems = styled.div`
  max-width: 1550px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  gap: 30px;
  margin-top: 40px;
`;

export const ChargingBox = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  right: 50%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  outline: none;
  background-color: #eee;
  opacity: 0.9;
  border: none;
  color: #383f51;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.3px;

  @media (max-width: 1130px) {
    background-color: #fff;
  }
`;

export const ButtonSearch = styled.button`
  width: 55px;
  height: 100%;
  position: relative;
  border: none;
  background-color: ${props =>
    props.theme.title === 'dark' ? '#121214' : '#000'};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  @media (min-width: 1131px) {
    background-color: ${props => props.theme.colors.background.contrast};
  }
`;

export const IconSearch = styled(HiOutlineSearch)`
  width: 27px;
  height: 27px;
  padding-top: 2px;
  color: #fff;
`;

export const IconSearchHeader = styled(HiOutlineSearch)`
  width: 30px;
  height: 30px;
  color: ${props => props.theme.colors.texts.secundary};
  cursor: pointer;
  position: relative;
  bottom: 3px;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 1131px) {
    display: none;
  }
`;

export const SearchArea = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 43px;
  width: 350px;
  border-radius: 2px;
  background-color: #eeeeee;

  @media (max-width: 1130px) {
    border: 1px solid #000;
    width: 45%;
    background-color: transparent;
    position: absolute;
    top: 111%;
    right: 28%;
    transform: ${props => (props.isActive ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: 0.1s linear;
  }

  @media (max-width: 670px) {
    width: 80%;
    right: 10%;
  }
`;
