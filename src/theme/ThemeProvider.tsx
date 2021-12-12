import React from 'react';
import defaultTheme from './defaults';

import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyle from './GlobalStyle';

const StyledThemeProvider: React.FC = ({ children }) => (
  <Provider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </Provider>
);

export default StyledThemeProvider;
