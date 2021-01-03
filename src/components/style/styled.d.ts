import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      dark: string;
      icon: string;
    }
    props?: any;
  }
}