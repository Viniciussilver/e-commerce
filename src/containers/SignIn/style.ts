import styled from 'styled-components';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.background.default};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 420px;
  width: 100%;
  padding: 50px 30px;
  background-color: ${props => props.theme.colors.background.default};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.texts.secundary};
  border-bottom: 2.5px solid #0058a1;
  width: max-content;
  padding-right: 15px;
`;

export const OutlineEye = styled(AiOutlineEye)<{ isVisible: boolean }>`
  width: 28px;
  height: 28px;
  color: #222226;
  cursor: pointer;

  position: absolute;
  right: 12px;
  top: -36px;

  display: ${({ isVisible }) => (!isVisible ? 'block' : 'none')};
`;

export const EyeInvisible = styled(AiOutlineEyeInvisible)<{
  isVisible: boolean;
}>`
  width: 28px;
  height: 28px;
  color: #222226;
  cursor: pointer;

  position: absolute;
  right: 12px;
  top: -36px;

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  padding-left: 6px;
  color: ${props => props.theme.colors.texts.secundary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 8px;

  font-weight: 500;
  font-size: 15.3px;
  color: rgba(0, 0, 0, 0.9r);

  outline: none;
  border-radius: 14px;
  border: 1.7px solid #222226;
`;

export const Button = styled.button`
  width: 100%;
  border: none;

  border-radius: 14px;
  background-color: #0058a1;
  letter-spacing: 0.2px;

  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 17.5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const P = styled.p`
  font-weight: 500;
  font-size: 16.3px;
  margin-top: -16px;
  padding-left: 6px;
  color: ${props => props.theme.colors.texts.secundary};
`;

export const ErrorBox = styled.div`
  position: relative;
`;

export const Message = styled.p`
  color: red;
  font-weight: 500;
  font-size: 15px;
  padding-left: 6px;
`;

export const ContainerItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
