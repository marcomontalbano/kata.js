/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const { readdirSync, statSync } = require('fs');
const { resolve, basename } = require('path');

const isDirectory = (source: string): boolean => statSync(source).isDirectory();

const getTestFiles = (dir: string, startDir: string = dir): string[] => {
    let filelist: string[] = [];
    const files = readdirSync(dir);

    files.forEach((file: string) => {
        if (isDirectory(`${dir}${file}`)) {
            filelist = [...filelist, ...getTestFiles(`${dir}${file}/`, startDir)];
            return;
        }

        const isNodeModules = /node_modules/.test(dir);
        const isTestFile = /\.test\.[j|t]s$/.test(file);

        if (!isNodeModules && isTestFile) {
            filelist.push(`${dir}${file}`);
        }
    });

    return filelist;
};

const getFolders = (folder: string = 'packages'): string[] => {
    const path: string = resolve(folder);
    return readdirSync(path).map((filename: string) => resolve(path, filename)).filter(isDirectory);
};

const describeFolder = (path: string): void => {
    const name = basename(path);
    describe(`[${name}]`, () => {
        getTestFiles(`${path}/`).forEach(require);
    });
};

getFolders('src').forEach(describeFolder);