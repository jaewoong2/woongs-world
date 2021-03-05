export function getInitialProps(): boolean {
    const isDark = localStorage.getItem('isDarkMode');
    return isDark !== null ? JSON.parse(isDark).value : false;
}
