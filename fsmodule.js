const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

const content = fs.readFileSync('file.txt');        // Waits until it is executed
console.log(content.toString());

console.log('Finished Reading File');

fs.writeFile('file.txt', 'This is the data to write', () => {
    console.log('Written to the File');
});

// fs.writeFileSync('file.txt', 'This is the data to write');
// console.log('Written to the File');