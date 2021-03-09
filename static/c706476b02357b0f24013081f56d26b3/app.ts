export function getFilePath(paths: string[]): string[] {
    const newPath: string[] = [];
    paths.forEach(path => {
        if (path.indexOf('pages') > -1 && path.indexOf('tsx')) {
            const fileName = path.split('/')[1];
            newPath.push(fileName.split('.')[0]);
        }
    });

    return newPath;
}
