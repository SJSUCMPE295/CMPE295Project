import fs from 'fs-extra';
import paths from '../config/paths';

export const cpStaticFiles = async () => {
    const source = paths.staticFiles;
    const destination = paths.clientBuildStatic;

    fs.copy(source, destination, (err) => {
        if (err) {
            console.log('An error occurred while copying the folder.');
            return console.error(err);
        }
        console.log('Copy completed!');
    });
};
