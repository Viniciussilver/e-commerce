import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: #000;

  @media (max-width: 1170px) {
    flex-direction: column;
    gap: 14px;
  }
`

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1170px) {
    padding-bottom: 10px;
    border-bottom: 1.7px solid #eeeeee;
  }
`

export const Title = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  margin: 8px 0;
`

export const Link = styled.a`
  font-weight: 300;
  color: #dcdcdc;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`

export const Img = styled.img`
  max-width: 350px;
`

export const ImageApp = styled.img<{ width?: string }>`
  width: 136px;
  height: 46px;
  cursor: pointer;
`

export const Dev = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #0058a1;
  font-weight: 600;
  font-size: 18.3px;
`

export const AreaContact = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid ${props => props.theme.colors.background.contrast};
  margin-top: 100px;

  @media (max-width: 1115px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.texts.primary};

  @media (max-width: 1115px) {
    font-size: 17px;
    text-align: center;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 785px) {
      flex-direction: column;
    }
  }

  p {
    font-weight: 500;
    font-size: 12.4px;
    color: ${props => props.theme.colors.texts.primary};
  }
`

export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: 2px solid #808080;
  font-size: 16.5px;
  font-weight: 400;
  background-color: transparent;
  color: ${props => props.theme.colors.texts.primary};
`

export const Button = styled.button`
  padding: 13px 20px;
  font-weight: bold;
  border: none;
  background-color: ${props => props.theme.colors.background.contrast};
  color: #f5f5f5;
  cursor: pointer;
  flex: 1;

  &:hover {
    opacity: 0.9;
  }
`
