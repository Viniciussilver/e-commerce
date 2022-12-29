import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.background};
  /* box-shadow: 0.5px 0.5px 10px 0.5px #000; */
  box-shadow: 0 0 10px #333;
  z-index: 5;
`;

export const ImgLogo = styled.img`
  width: 48px;
  border-radius: 12px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;
`;

export const LinkStyle = styled.a<{ isActive: boolean }>`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 18px;

  line-height: 19px;
  opacity: 0.8;
  padding: 2px 5px;
  border-bottom: ${props =>
    props.isActive ? `2px solid ${props.theme.colors.text}` : 'none'};

  &:hover {
    opacity: 1;
  }
`;

export const CartArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #eeeeee;
  padding: 8px 10px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Cart = styled(FaShoppingCart)`
  width: 23px;
  height: 23px;
  color: #000;

  @media screen and (max-width: 576px) {
    color: ${props => props.theme.colors.text};
  }
`;

export const BoxButton = styled.div`
  width: 46px;
  height: 13px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{ position?: boolean }>`
  width: 20px;
  height: 18px;
  border-radius: 10px;
  border: none;
  transition: 0.7s all;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);

  transform: ${({ position }) => (position ? 'none' : 'translateX(30.4px);')};
`;

export const BoxQuantity = styled.div`
  padding: 5px 8px;
  background-color: #000;
`;

export const P = styled.p<{ color?: string }>`
  font-size: 15px;
  font-weight: 400;
  color: ${({ color }) => color || '#97a1a9'};
`;

export const AreaProducts = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ListCategories = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 52px;
  left: -5px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 170px;
  border-radius: 2px;
  background-color: #eeeeee;
  overflow: hidden;
  transition: 0.2s ease-in;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};

  p {
    padding-left: 5px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 8px 0;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  border-bottom: 1.5px solid #dcdcdc;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const ResponsiveCartArea = styled.div`
  position: relative;
  margin: 6px;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;
    background-color: #000;
    color: #ececec;
    position: absolute;
    top: -13px;
    right: -10px;
    font-size: 15px;
  }

  @media screen and (min-width: 576px) {
    display: none;
  }
`;
