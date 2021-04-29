const directory = './files/';
const path = require('path');
const fs = require('fs');

const getFilesAndDirectories = (directory) => {

    const test = fs.readdirSync(directory);

    const directories = test.filter(item => fs.lstatSync(path.resolve(directory, item)).isDirectory());
    const files = test.filter(item => !fs.lstatSync(path.resolve(directory, item)).isDirectory());

    return { directories, files}
}

module.exports = getFilesAndDirectories;