const csvtojson = require("csvtojson");
const FILE_PATH = require('../../utils/consts')
const fs = require('fs');
/**
 *  Task: convert csvfile to jsonobject line by line
 */
// fs.readFile()
csvtojson({ output: "line" })
    .fromFile(FILE_PATH.FILE_CSV)
    .subscribe((csvLine) => {
        console.log('csvLine111: ', csvLine);
        // csvLine =>  "1,2,3" and "4,5,6"

        // fs.appendFile('writeLine.txt', csvLine, function (err) {
        //     if (err) throw err;
        //     console.log('Saved!');
        // });

    })
// const writeStream = fs.createWriteStream('/output');
// writeStream