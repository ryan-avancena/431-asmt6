// const bookInfo = require('./schema.json'); // works in Node.js
// console.log(bookInfo)

import fs from 'fs';
const data = fs.readFileSync('schema.json', 'utf8');
const bookInfo = JSON.parse(data);
console.log(bookInfo)
