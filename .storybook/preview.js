import { StyledThemeProvider } from '../src/theme';
export const decorators = [
  (Story) => (
    <StyledThemeProvider>
      <Story />
    </StyledThemeProvider>
  )
];
