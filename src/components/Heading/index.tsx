import React, { FC } from 'react';

import { StyledHeading } from './styles';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const HeadingUI = ({ as = 'h1', children, ...props }: HeadingProps): JSX.Element => (
  <StyledHeading as={as} {...props}>
    {children}
  </StyledHeading>
);

export const Heading: FC<HeadingProps> = (args) => <HeadingUI {...args} />;
