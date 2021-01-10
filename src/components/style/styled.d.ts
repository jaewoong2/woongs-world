import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        isDarkMode: boolean;
        color: {
            black: string;
            purple: string;
            white: string;
            yellow: string;
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
