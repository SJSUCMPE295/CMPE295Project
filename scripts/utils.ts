import chalk from 'chalk';

export const logMessage = (message: any, level: string = 'info') => {
    const color =
        level === 'error'
            ? 'red'
            : level === 'warning'
            ? 'yellow'
            : level === 'info'
            ? 'blue'
            : 'white';
    console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

export const compilerPromise = (name: string, compiler: any) => {
    return new Promise((resolve, reject) => {
        compiler.hooks.compile.tap(name, () => {
            logMessage(`[${name}] Compiling `);
        });
        compiler.hooks.done.tap(name, (stats: any) => {
            if (!stats.hasErrors()) {
                return resolve();
            }
            return reject(`Failed to compile ${name}`);
        });
    });
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const clientOnly = () => process.argv.includes('--client-only');

export const openBrowser = (options: any = {}) => {
    const env = process.env.NODE_ENV;
    if ((options.url && env === 'development') || env === 'dev') {
        const openBrowserUtil = require('react-dev-utils/openBrowser');
        const route = options.url; // options.route;
        if (openBrowserUtil(route)) {
            console.log('The browser tab has been opened : ' + route);
        }
    }
};
const defaultExport = {
    clientOnly,
    compilerPromise,
    openBrowser,
    logMessage,
    sleep,
};
// @ts-ignore
export default defaultExport;
