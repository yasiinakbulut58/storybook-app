// import original module declarations
import 'styled-components';

import theme from './defaults';

type themeType = typeof theme;

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}
