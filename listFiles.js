const directory = './files/';
const path = require('path');
const fs = require('fs');

const getFilesAndDirectories = (directory) => {

    const contents = fs.readdirSync(directory);

    const directories = [];
    const files = [];

    contents.forEach(item => {
        if (fs.lstatSync(path.resolve(directory, item)).isDirectory())
            { directories.push(item); }
        else
            { files.push(item); }
    });

    directories.sort();
    files.sort();

    return { directories, files}
}

module.exports = getFilesAndDirectories;