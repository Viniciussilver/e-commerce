import styled from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerOrders = styled.div`
  padding: 30px;
  padding-top: 7px;
  background-color: ${props => props.theme.colors.background.default};
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  max-width: 800px;
  width: 100%;
  min-height: 500px;
  margin-bottom: 90px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.texts.secundary};
  padding: 0 10px;
  text-align: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2.5px solid #0058a1;
`;

export const ChargingBox = styled.div`
  width: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled(MdOutlineCancel)`
  width: 26px;
  height: 26px;
  color: ${props => props.theme.colors.texts.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
