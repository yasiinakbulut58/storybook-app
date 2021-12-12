import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    padding: 0,
    margin: 0,
    fontFamily: 'inherit'
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box'
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  },
  'a, button': {
    '&:active': {
      opacity: '0.7'
    }
  },
  button: {
    appearance: 'none',
    border: 0,
    background: 'transparent',
    padding: 0,
    cursor: 'pointer'
  },
  body: {
    backgroundColor: theme.colors.base.light,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontWeights.regular
  }
}));

export default GlobalStyle;
