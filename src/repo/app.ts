export function getInitialProps(): boolean {
    const isDark = typeof window !== 'undefined' ? window.localStorage?.getItem('isDarkMode') : null;
    if (isDark === null) {
        if (typeof window !== 'undefined') {
            const mql = window?.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
            if (hasMediaQueryPreference) {
                setThemeProps(mql.matches ? true : false);
                return mql.matches ? true : false;
            } else {
                return false;
            }
        } else {
            return false;
        }
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
        descriptions: ['Web FE', 'Python for Coiding test', 'C++ for Major', 'C#, Java For Noraml Course'],
    },
];
