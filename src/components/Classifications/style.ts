import styled from 'styled-components';

import { BsPersonCircle } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 50px 0;
`;

export const Title = styled.h1`
  color: #000;
  font-weight: 700;
  font-size: 40px;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ContainerItem = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 9px;
  box-shadow: 0 0 8px #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  background-color: ${props => props.theme.colors.primary};
`;

export const Icon = styled(BsPersonCircle)`
  width: 35px;
  height: 35px;
  color: #000;
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 16.5px;
  color: rgba(0, 0, 0, 0.8);
`;

export const ResumeArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .name {
    font-weight: 500;
    font-size: 17px;
  }

  span {
    font-size: 15.6px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;
  }
`;
