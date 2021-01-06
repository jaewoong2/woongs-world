import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            dark: string;
            icon: string;
            border: string;
            boxShadow: string;
            hoverBackground: string;
        };
        props?: any;
    }
}
