const path = require('path');
const fs = require('fs');

const getFilesAndDirectories = (pathToDirectory) => {

    const contents = fs.readdirSync(pathToDirectory);

    const directories = [];
    const files = [];

    contents.forEach(item => {
        if (fs.lstatSync(path.resolve(pathToDirectory, item)).isDirectory())
            { directories.push(item); }
        else
            { files.push(item); }
    });

    directories.sort();
    files.sort();

    // remove "./files" from beginning of path for client use
    const clientPath = pathToDirectory.slice("./files".length);

    return { directories, files, clientPath }
}

module.exports = getFilesAndDirectories;