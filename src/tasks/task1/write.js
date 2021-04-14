import csvtojson from "csvtojson";
import FILE_PATH from '../../utils/consts'
import fs from 'fs';
// fs.readFile()
// csvtojson({ output: "line" })
//     .fromFile(FILE_PATH.FILE_CSV)
//     .subscribe((csvLine) => {
//         console.log('csvLine111: ', csvLine);
//         // csvLine =>  "1,2,3" and "4,5,6"

//         fs.appendFile('src/output/write.txt', csvLine, function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//         });

//     })
/**
 *  Task: convert csvfile to jsonobject line by line
 */
const writeStream = fs.createWriteStream('../../output/writeText.txt', { encoding: 'utf8' });
fs.createReadStream(FILE_PATH.FILE_CSV)
    .pipe(csvtojson())
    .on('data', (data) => writeStream.write(data))
    .on('error', (err) => { console.log('err message======', err) })