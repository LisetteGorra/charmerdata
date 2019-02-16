const fs = require('fs');

// const charmeremployees = "charmeremployees.txt";

// let employees = fs.readFileSync(charmeremployees, 'utf8');

// console.log(employees);



const charmersalaries = "charmersalaries.txt";

let salaries = fs.readFileSync(charmersalaries, 'utf8', function(error, data){
    if(error) throw error;
   
  var array = data; 
    
 for(var i = 0; i < array.length; i++){
     console.log(array[i]);
 }
 
 
//  console.log(myArray);
    
    
});



 
 










// const charmerdepartments = "charmerdepartments.txt";

// let departments = fs.readFileSync(charmerdepartments, 'utf8');

// console.log(departments);








// const charmerdepartmentlist = "departmentlist.txt";

// let departmentlist = fs.readFileSync(charmerdepartmentlist, 'utf8');

// console.log(departmentlist);