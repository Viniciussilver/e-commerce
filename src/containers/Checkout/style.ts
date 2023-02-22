import styled from 'styled-components';
import Select from 'react-select';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background.paper};
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 70px;

  gap: 60px;
`;

export const ContainerCheckout = styled.div`
  display: flex;
  /* background-color: ${props =>
    props.theme.title === 'dark' ? 'rgba(0,0,0,0.5)' : '#fff'}; */
  padding: 30px 40px;
  height: max-content;
  width: 750px;
  border-radius: 2px;
  border: 1px solid #ccc;
  position: sticky;
  top: 30px;
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

export const SelectStyles = styled(Select)<{ textError?: string | undefined }>`
  width: 100%;
  cursor: pointer;

  .css-13cymwt-control {
    height: 45.3px;
    cursor: pointer;
    border-radius: 7px;
    border: ${({ textError }) =>
      textError ? '2px solid red' : '1.7px solid #ccc'};
  }
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

export const Input = styled.input<{ textError?: string | undefined }>`
  width: 100%;
  padding: 11px 8px;

  font-weight: 500;
  font-size: 15.3px;
  color: #777777;
  background-color: #fff;
  outline: none;
  border-radius: 7px;
  border: ${({ textError }) =>
    textError ? '2px solid red' : '1.7px solid #ccc'};
`;

export const IMask = styled(InputMask)<{ textError?: string | undefined }>`
  width: 100%;
  padding: 11px 8px;

  font-weight: 500;
  font-size: 15.3px;
  color: #777777;
  background-color: #fff;
  outline: none;
  border-radius: 7px;
  border: ${({ textError }) =>
    textError ? '2px solid red' : '1.7px solid #ccc'};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;

  .error-box {
    position: relative;
    width: 100%;
  }

  .error-message {
    position: absolute;
    left: 0;
    color: red;
    font-size: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  padding-bottom: 8px;
  padding-top: 4px;
  color: ${props => props.theme.colors.texts.secundary};

  span {
    color: red;
  }
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5px;
  position: relative;
  top: 2px;

  p {
    position: relative;
    bottom: 3.6px;
    font-weight: 400;
    font-size: 17px;
    color: #fff;
  }
`;
