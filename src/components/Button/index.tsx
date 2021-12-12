import React, { FC, ButtonHTMLAttributes, ReactChild } from 'react';

import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'success' | 'dark' | 'error';
  variant?: 'text' | 'withBackground';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactChild;
}

const ButtonUI = ({
  color = 'error',
  variant = 'withBackground',
  type = 'button',
  disabled = false,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton color={color} variant={variant} type={type} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export const Button: FC<ButtonProps> = (args) => <ButtonUI {...args} />;
