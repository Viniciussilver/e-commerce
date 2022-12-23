import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

export const AreaImg = styled.div`
  width: 100%;
  height: 165px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  border-radius: 2px;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
`;

export const NameText = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 18.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const AreaStars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0px;

  p {
    padding-left: 4px;
    font-size: 13.3px;
    color: #afafaf;
    font-weight: 300;
  }
`;

export const StarIcon = styled(AiFillStar)<{ color: string }>`
  width: 17px;
  height: 17px;
  color: ${({ color }) => color};
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 17px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  &:hover {
    opacity: 0.9;
  }
`;
