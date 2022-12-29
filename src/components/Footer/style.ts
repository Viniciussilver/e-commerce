import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.secundary};

  @media screen and (max-width: 1170px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1170px) {
    padding-bottom: 10px;
    border-bottom: 1.7px solid #eeeeee;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  margin: 8px 0;
`;

export const Link = styled.a`
  font-weight: 300;
  color: #dcdcdc;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const Img = styled.img`
  max-width: 350px;
`;

export const ImageApp = styled.img<{ width?: string }>`
  width: 136px;
  height: 46px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: ${props =>
    props.theme.title === 'dark' ? props.theme.colors.primary : '#0058a1'};
  font-weight: 600;
  font-size: 19.5px;
`;

export const AreaContact = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: 100px;

  @media screen and (max-width: 1115px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 1115px) {
    font-size: 17px;
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    gap: 30px;
    align-items: center;

    @media screen and (max-width: 785px) {
      flex-direction: column;
    }
  }

  p {
    font-weight: 500;
    font-size: 12.4px;
  }
`;

export const Input = styled.input`
  width: 240px;
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.9);
  font-size: 16.5px;
  font-weight: 400;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
`;

export const Button = styled.button`
  padding: 13px 20px;
  font-weight: bold;
  border: none;
  background-color: ${props =>
    props.theme.title === 'dark' ? '#001242' : '#808080'};
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
