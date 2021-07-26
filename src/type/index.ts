type Color = {
    /** representative Color*/
    primary: string;
    /** dark => dark, light => light */
    main: string;
    /** dark => light, light => dark */
    sub: string;
    border: string;
    boxShadow: string;
    hover: string;
    hoverBg: string;
    tag: string;
    link: string;
    icon: string;
}

export type defaultTheme = {
    isDarkMode: boolean;
    color: Color,
    /** original Color */
    origin: {
        color: {
            white: string;
            black: string;
            yellow: string;
            purple: string;
            lightDark: string;
            sky: string;
            navy: string;
        }
    }
}