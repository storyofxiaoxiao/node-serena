import csv from "csvtojson";
import FILE_PATH from '../../utils/consts.js'
import fs from 'fs';
/**
 *  Task: convert csvfile to jsonobject line by line
 */
function logger(err) {
    console.log('err message======', err)
}
const writeStream = fs.createWriteStream('src/output/writeText.txt', { encoding: 'utf8' });
fs.createReadStream(FILE_PATH.FILE_CSV)
    .pipe(csv())
    .on('data', (data) => writeStream.write(data))
    .on('error', (err) => { logger(err) })