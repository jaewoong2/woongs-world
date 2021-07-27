export function getInitialProps(): boolean {
    const isDark = typeof window !== 'undefined' ? window.localStorage?.getItem('isDarkMode') : null;
    if (isDark === null) {
        window.localStorage?.setItem('isDarkMode', JSON.stringify({ value: false }));
        return false;
    }
    return JSON.parse(isDark).value;
}

export function setThemeProps(isDarkMode: boolean): void {
    if (typeof window !== 'undefined') {
        window.localStorage?.setItem('isDarkMode', JSON.stringify({ value: isDarkMode }));
    }
}

export const MainInfos: {
    title: string;
    descriptions?: string[];
    description?: string;
}[] = [
        {
            title: 'How',
            description: 'Readable Code, Reusable Components, Responsive UI',
        },
        {
            title: 'When',
            description: 'Whenever i have an idea for Develop',
        },
        {
            title: 'What',
            descriptions: ['Web FE', 'Python For Coiding test', 'C++ for Major', 'C#, Java For Noraml Course'],
        },
    ];

export const color = {
    white: '#fafafa',
    black: '#1e1f21ef',
    yellow: '#fdd804',
    purple: '#6b52f8',
    lightDark: '#e9e9e9f4',
    sky: '#cad6f0c6',
    navy: '#0d225084',
};

export const darkTheme = {
    color: {
        /** representative Color*/
        primary: color.yellow,
        /** dark => dark, light => light */
        main: color.black,
        /** dark => light, light => dark */
        sub: color.white,
        border: '#353638',
        boxShadow: '#00010311',
        hover: '#c8c8c8c9',
        hoverBg: '#333436ea',
        tag: color.sky,
        link: '#363636ed',
        icon: color.black,
    },
};

export const lightTheme = {
    color: {
        /** representative Color*/
        primary: color.purple,
        /** dark => dark, light => light */
        main: color.white,
        /** dark => light, light => dark */
        sub: color.black,
        border: '#e4e7e8',
        boxShadow: '#f0f0f0a',
        hoverBg: '#e4e7e899',
        hover: '#2828288c',
        tag: color.navy,
        link: color.lightDark,
        icon: color.yellow,
    },
};
