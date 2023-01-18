import styled from 'styled-components'

import { AiFillStar } from 'react-icons/ai'

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`

export const AreaImg = styled.div`
  width: 100%;
  min-height: 165px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  border-radius: 2px;
`

export const Image = styled.img`
  width: 130px;
  height: 130px;
  transform: scale(0.9);
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export const NameText = styled.p`
  color: ${props => props.theme.colors.texts.secundary};
  font-weight: 500;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`

export const AreaStars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0px;

  p {
    padding-left: 4px;
    font-size: 13.3px;
    color: ${props => (props.theme.title === 'dark' ? '#bac4cc' : '#bac4cc')};
    font-weight: 400;
  }
`

export const StarIcon = styled(AiFillStar)<{ color: string }>`
  width: 17px;
  height: 17px;
  color: ${({ color }) => color};
`

export const P = styled.p`
  font-weight: 600;
  font-size: 17px;
  color: ${props => props.theme.colors.texts.secundary};
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props =>
    props.theme.title === 'dark'
      ? props.theme.colors.background.contrast
      : '#333'};
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  &:hover {
    opacity: 0.9;
  }
`
