export function getInitialProps(): boolean {
    const isDark = typeof window !== 'undefined' ? window.localStorage?.getItem('isDarkMode') : null;
    return isDark !== null ? JSON.parse(isDark).value : false;
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
