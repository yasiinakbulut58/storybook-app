import React, { FC } from 'react';

import { StyledText } from './styles';

export interface TextProps {
  size?: 'normal' | 'small' | 'xsmall';
  children: React.ReactNode;
}

const TextUI = ({ size = 'normal', children, ...props }: TextProps): JSX.Element => (
  <StyledText size={size} {...props}>
    {children}
  </StyledText>
);

export const Text: FC<TextProps> = (args) => <TextUI {...args} />;
