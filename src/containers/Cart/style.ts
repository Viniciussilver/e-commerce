import styled from 'styled-components'

import { IoIosArrowBack } from 'react-icons/io'

// export const Container = styled.div<{ visible: boolean }>`
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   top: 0;
//   z-index: 5;
//   transition: 0.3s;

//   visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
//   opacity: ${({ visible }) => (visible ? '1' : '0')};
// `;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
  padding-top: 10px;

  p {
    font-weight: 500;
    font-size: 25px;
    color: ${props => props.theme.colors.texts.secundary};
  }
`

export const ArrowIcon = styled(IoIosArrowBack)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.texts.secundary};
  cursor: pointer;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const CartArea = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;

  /* position: absolute; */
  width: 500px;
  height: 100vh;

  background-color: ${props => props.theme.colors.background.paper};
  /* transition: 0.3s; */
  /* top: 0; */
  /* right: ${({ isActive }) => (isActive ? '0' : '-420px')};
  z-index: 7; */

  @media screen and (max-width: 515px) {
    width: 380px;
  }
`

export const ScrollList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 10px;
  padding-bottom: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export const BoxItem = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

export const BoxImage = styled.div`
  background-color: #fff;
  /* width: 150px;
  height: 150px; */
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`

export const Image = styled.img`
  width: 110px;

  @media screen and (max-width: 515px) {
    width: 85px;
  }
`

export const Title = styled.p`
  color: ${props => props.theme.colors.texts.primary};
  font-weight: 500;
  font-size: 17px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;

  .text-price {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.texts.secundary};
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    .box-quantity {
      display: flex;
      align-items: center;
      gap: 14px;
      width: max-content;
      padding: 0 12px;
      border: 2px solid
        ${props =>
          props.theme.title === 'dark'
            ? props.theme.colors.background.contrast
            : '#7f7f7f'};
      border-radius: 5px;

      button {
        background-color: transparent;
        padding: 0 3px;
        border: none;
        font-size: 22px;
        color: ${props => (props.theme.title === 'dark' ? '#fff' : '#7f7f7f')};
        cursor: pointer;
      }

      p {
        font-weight: 600;
        font-size: 15px;
        color: ${props => props.theme.colors.texts.primary};
      }
    }

    a {
      color: ${props => (props.theme.title === 'dark' ? '#B22222' : '#00a8ff')};
      font-weight: 600;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`

export const CartResume = styled.div`
  border-radius: 20px 20px 0 0;
  width: 100%;
  background-color: ${props =>
    props.theme.title === 'dark'
      ? props.theme.colors.background.default
      : '#2c2c2c'};
  display: flex;
  flex-direction: column;
  gap: 10px;

  .resume-area {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    padding: 13px 15px;
    color: #fff;
    border-bottom: 1px solid #fff;

    .resume {
      display: flex;
      flex-direction: column;

      .bold {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 17px;
        font-weight: 600;
        font-size: 18px;
      }

      .env {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-weight: 300;
        font-size: 16.5px;
      }
    }

    .box-env {
      padding: 7px 10px;
      color: red;
      background-color: #f0e68c;
      border-radius: 7px;
      font-weight: 700;
      font-size: 17px;
    }
  }
  button {
    margin: 16px auto;
    width: 60%;
    background-color: #fff;
    border-radius: 14px;
    color: #000;
    border: none;
    padding: 8px 0;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const P = styled.p<{ decoration: boolean }>`
  text-decoration: ${({ decoration }) =>
    decoration ? 'none' : ' line-through'};
`
