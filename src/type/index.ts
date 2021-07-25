import { Theme } from "@emotion/react";

export type defaultTheme = {
    theme: {
        isDarkMode: boolean;
        color: {
            whiteDarker: string;
            black: string;
            representativeColor: string;
            purple: string;
            white: string;
            yellow: string;
            primary: string;
            dark: string;
            icon: string;
            border: string;
            boxShadow: string;
            hoverColor: string;
            hoverBackground: string;
            tagColor: string;
            linkColor: string;
        };
    }
} & { theme: Theme }