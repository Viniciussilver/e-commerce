import styled from 'styled-components'

import { BsPersonCircle } from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 50px 0;
  margin-top: 30px;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.texts.primary};
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 1090px) {
    font-size: 23px;
    font-weight: 600;
  }
`

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`

export const ContainerItem = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`

export const Icon = styled(BsPersonCircle)`
  width: 35px;
  height: 35px;
  color: ${props => props.theme.colors.background.contrast};
`

export const Description = styled.p`
  font-weight: 600;
  font-size: 16.5px;
  color: ${props => props.theme.colors.texts.secundary};
`

export const ResumeArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .name {
    font-weight: 500;
    font-size: 17px;
    color: ${props => props.theme.colors.texts.primary};
  }

  span {
    font-size: 15.6px;
    font-weight: 500;
    color: ${props => props.theme.colors.texts.primary};
    opacity: 0.8;
  }
`
