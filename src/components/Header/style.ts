import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;

  background-color: ${props => props.theme.colors.background.paper};
  /* box-shadow: 0.5px 0.5px 10px 0.5px #000; */
  box-shadow: 0 0 8px #333;
  z-index: 5;

  .items-header {
    display: flex;
    align-items: center;
    gap: 27px;

    @media (max-width: 840px) {
      gap: 20px;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 48px;
  border-radius: 12px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LinkStyle = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.texts.secundary};
  font-weight: ${props => (props.theme.title === 'dark' ? 400 : 600)};
  font-size: 18px;
  position: relative;

  opacity: 0.8;
  padding: 1px 6px;
  border-bottom: ${props =>
    props.isActive
      ? `2px solid ${props.theme.colors.background.contrast}`
      : 'none'};

  ${props =>
    !props.isActive &&
    `
  ::after {
    content: '';
    width: 0%;
    height: 2px;
    background-color: ${props.theme.colors.background.contrast};
    position: absolute;
    
    bottom: -1px;
    left: 0px;
    transition: 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

`}
`;

export const IconUser = styled(CiUser)`
  margin-right: -4px;
  width: 34px;
  height: 34px;
  color: ${props => props.theme.colors.background.contrast};
`;

export const TextUser = styled.p`
  color: ${props => props.theme.colors.texts.secundary};
  font-weight: ${props => (props.theme.title === 'dark' ? 400 : 600)};
  font-size: 17.7px;

  opacity: 0.8;
`;

export const CartArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #eeeeee;
  padding: 8px 10px;
  cursor: pointer;
  opacity: 0.9;
  height: 44px;
  border-radius: 1px;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 839px) {
    display: none;
  }
`;

export const Cart = styled(FaShoppingCart)`
  width: 25px;
  height: 25px;
  color: #000;

  @media (max-width: 839px) {
    color: ${props => props.theme.colors.texts.secundary};
  }
`;

export const BoxButton = styled.div`
  width: 46px;
  height: 15px;
  background-color: ${props => props.theme.colors.background.contrast};
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{ position?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: none;
  transition: 0.7s all;
  cursor: pointer;

  box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);

  transform: ${({ position }) => (position ? 'none' : 'translateX(29px);')};
`;

export const BoxQuantity = styled.div`
  padding: 4px 8px;
  background-color: ${props =>
    props.theme.title === 'dark' ? '#121214' : '#000'};
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

export const ListCategories = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? '24px' : '15px')};
  left: -5px;
  display: flex;
  flex-direction: column;
  min-width: 210px;
  border-radius: 2px;
  transition: 0.1s ease-out;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  /* box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.22); */

  p {
    padding-left: 5px;
  }

  .join {
    width: 100%;
    height: 24px;
    background-color: transparent;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.paper};
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 10px 3px;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  border-bottom: 1.5px solid #dcdcdc;
  cursor: pointer;
  /* color: rgba(0, 0, 0, 0.8); */
  color: ${props => props.theme.colors.texts.secundary};

  &:hover {
    background-color: #dcdcdc;
    color: #000;
  }
`;

export const TextLoading = styled.p`
  padding: 10px 3px;
  width: 100%;
  font-weight: 500;
  font-size: 17px;
  color: ${props => props.theme.colors.texts.secundary};
  cursor: auto;
  border-bottom: 1.5px solid #dcdcdc;

  white-space: nowrap;
`;

export const BoxLoading = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: center;
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

  @media (min-width: 840px) {
    display: none;
  }
`;
