import { ReactNode } from 'react';
import { InputArea, Label } from './style';

interface InputAreaFormTypes {
  label: string;
  id?: string;
  children: ReactNode;
}

export const InputAreaForm = ({ label, id, children }: InputAreaFormTypes) => {
  return (
    <InputArea>
      <Label htmlFor={id}>
        {label}
        <span>*</span>{' '}
      </Label>
      {children}
    </InputArea>
  );
};
