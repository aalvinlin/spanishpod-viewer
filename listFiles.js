const path = require('path');
const fs = require('fs');

const getFilesAndDirectories = (pathToDirectory) => {

    const contents = fs.readdirSync(pathToDirectory);

    const directories = [];
    const files = [];
    const lessons = {};

    contents.forEach(fileName => {
        if (fs.lstatSync(path.resolve(pathToDirectory, fileName)).isDirectory())
            { directories.push(fileName); }
        
        // categorize files
        else
            {
                // get parts of filename
                const [lessonCode, seasonAndLessonNumber, itemType] = fileName.split("_");

                // if the file is part of a lesson, process it
                if (seasonAndLessonNumber)
                    {
                        // use an object to keep track of each lesson. Initialize if it doesn't exist yet.
                        if (!lessons[lessonCode])
                            { lessons[lessonCode] = []; }

                        // get lesson number from second part of filename
                        const lessonNumber = parseInt(seasonAndLessonNumber.slice(3));

                        // create array for lesson number if it doesn't exist yet
                        if (!lessons[lessonCode][lessonNumber])
                            { lessons[lessonCode][lessonNumber] = []; }

                        // add filename to array for this lesson number
                        lessons[lessonCode][lessonNumber].push(fileName);
                    }
                
                // file is part of an unknown lesson or not part of a lesson
                else
                    {
                        files.push(fileName);
                    }
            }
    });

    directories.sort();
    files.sort();
    
    // remove "./files" from beginning of path for client use
    const clientPath = pathToDirectory.slice("./files".length);

    return { directories, lessons, files, clientPath }
}

module.exports = getFilesAndDirectories;