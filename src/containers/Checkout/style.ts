import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background.paper};
  display: flex;
  justify-content: center;
`;

export const ContainerCheckout = styled.div`
  display: flex;

  gap: 30px;
  /* background-color: ${props =>
    props.theme.title === 'dark' ? 'rgba(0,0,0,0.5)' : '#fff'}; */
  padding: 30px 40px;
  margin-top: 135px;
  height: max-content;
  width: 76%;
  border-radius: 2px;
  border: 1px solid #ccc;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LinkCancel = styled.a`
  font-size: 16.5px;
  font-weight: 400;
  color: #0058a1;
  text-decoration: underline;
  cursor: pointer;
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.texts.primary};
`;

export const Select = styled.select`
  padding: 11px 8px;

  border: 1.7px solid #ccc;
  border-radius: 7px;
  font-weight: 500;
  font-size: 15.3px;
  background-color: #fff;
  color: #777777;
  outline: none;
  cursor: pointer;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.texts.primary};
`;

export const ItemsForm = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const RowInputArea = styled.div`
  display: flex;
  gap: 13px;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 8px;

  font-weight: 500;
  font-size: 15.3px;
  color: #777777;
  background-color: #fff;
  outline: none;
  border-radius: 7px;
  border: 1.7px solid #ccc;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  color: ${props => props.theme.colors.texts.secundary};

  span {
    color: red;
  }
`;
