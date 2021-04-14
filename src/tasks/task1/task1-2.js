const csv = require("csvtojson");
const FILE_PATH = require('../../utils/consts');
/**
 *  Task1.2: convert csvfile to jsonobject
 *  ！！！important, only support .csv , can't be .xlsx
 */
csv()
    .fromFile(FILE_PATH.FILE_CSV)
    .then((jsonObj) => {
        console.log('jsonObj: ', jsonObj);
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
    });


