import { ReactNode } from 'react';

import { StyledButton } from './style';

type ButtonTypes = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  styles?: any;
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  styles,
}: ButtonTypes) => {
  //

  return (
    <StyledButton
      style={{ ...styles }}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
