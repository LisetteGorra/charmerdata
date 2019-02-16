const fs = require('fs');

const charmeremployees = "charmeremployees.txt";

let employees = fs.readFileSync(charmeremployees, 'utf8');

console.log(employees);



// const charmersalaries = "charmersalaries.txt";

// let salaries = fs.readFileSync(charmersalaries, 'utf8');

// console.log(charmersalaries);



 
 










// const charmerdepartments = "charmerdepartments.txt";

// let departments = fs.readFileSync(charmerdepartments, 'utf8');

// console.log(departments);








// const charmerdepartmentlist = "departmentlist.txt";

// let departmentlist = fs.readFileSync(charmerdepartmentlist, 'utf8');

// console.log(departmentlist);




//  cat charmersalaries.txt | sed -n '/9999/p'

// cat filename.txt | sed -n '/9999/p'