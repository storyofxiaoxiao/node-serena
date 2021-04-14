/**
 * TASK
 * 1.1 Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
 *  •The program should be started from npmscript via nodemon(i.e. npm run task1).
 *  •The program should be running in a stand-by mode and should not be terminated after the first-stringprocessin
 */
// incase the output be the binary.
process.stdin.setEncoding('utf8');

function writeFun() {
    process.stdout.write('\nplease input your word: ');
}

function reverseInput(str) {
    let temp;
    // slice fun for deleting the 'enter input'
    temp = [...str].slice(0, -1).reverse().join("");
    return temp;
}
process.stdin.on('data', (input) => {
    const reverseResult = reverseInput(input);
    process.stdout.write('\nreverse result is: ' + reverseResult);
    writeFun();
})