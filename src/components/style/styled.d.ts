import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      dark: string;
    }
    props?: any;
  }
}