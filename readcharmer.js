const fs = require('fs');

const charmeremployees = "charmeremployees.txt";

let data = fs.readFileSync(charmeremployees, 'utf8');

console.log(data);

