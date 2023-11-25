import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface CustomTheme extends Theme {
    font: {
        fontScale: number;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    font?: {
        fontScale?: number;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}