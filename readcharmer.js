const fs = require('fs');

const charmeremployees = "charmeremployees.txt";

let employees = fs.readFileSync(charmeremployees, 'utf8');

console.log(employees);





const charmersalaries = "charmersalaries.txt";

let salaries = fs.readFileSync(charmersalaries, 'utf8');

console.log(salaries);





const charmerdepartments = "charmerdepartments.txt";

let departments = fs.readFileSync(charmerdepartments, 'utf8');

console.log(departments);