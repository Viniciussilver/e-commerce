import { ReactNode } from 'react';
import { InputArea, Label } from './style';

interface InputAreaFormTypes {
  label: string;
  id?: string;
  children: ReactNode;
  textError?: string | undefined;
}

export const InputAreaForm = ({
  label,
  id,
  children,
  textError,
}: InputAreaFormTypes) => {
  return (
    <InputArea>
      <Label htmlFor={id}>
        {label}
        <span>*</span>{' '}
      </Label>
      {children}
      {/* <div className='error-box'>
        <p className='error-message'>{textError}</p>
      </div> */}
    </InputArea>
  );
};
