process.stdin.setEncoding('utf8');
process.stdout.write('please input your word: ');
process.stdin.on('data', (input) => {
    let temp;
    temp = [...input].slice(0, -1).reverse().join("");
    process.stdout.write('reverse result is: ' + temp);
    process.stdout.write('\nplease input your word: ');
})