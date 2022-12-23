import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { BsLightbulbFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 15px 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  background-color: #fff;
  /* box-shadow: 0.5px 0.5px 10px 0.5px #000; */
  box-shadow: 0 0 10px #333;
  z-index: 2;
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
  color: #000;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : '400')};
  font-size: ${({ isActive }) => (isActive ? '17.7px' : '17px')};
  line-height: 19px;
  opacity: 0.8;

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
`;

export const Cart = styled(FaShoppingCart)`
  width: 23px;
  height: 23px;
  color: #000;
  cursor: pointer;
`;

export const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BoxButton = styled.div`
  width: 46px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const IconDarkTheme = styled(MdDarkMode)`
  width: 22px;
  height: 22px;
`;

export const IconLightTheme = styled(BsLightbulbFill)`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button<{ position?: boolean }>`
  width: 20px;
  height: 18px;
  border-radius: 10px;
  border: none;
  transition: 0.7s all;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);

  transform: ${({ position }) => (position ? 'translateX(30.4px);' : 'none')};
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
  top: 50px;
  left: -5px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 160px;
  border-radius: 2px;
  background-color: #fff;
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
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: #eee;
  }
`;
