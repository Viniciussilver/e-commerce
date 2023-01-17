import 'styled-components'

import Light from '../styles/themes/light'
declare module 'styled-components' {
  type ThemeType = typeof Light

  export interface DefaultTheme extends ThemeType {}
}
