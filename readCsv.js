const csvtojson = require("csvtojson");
const csvFilePath = './upload/excel111.csv';

// ！！！important, only support .csv , can't be .xlsx
/**
 *  Task: convert csvfile to jsonobject
 */
csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {

        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */

    });
