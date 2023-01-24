import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  border: none;

  border-radius: 14px;
  background-color: #0058a1;
  letter-spacing: 0.2px;

  height: 45px;

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
