var fs = require("fs");

//Step 1 - create all single-d and multi-d arrays AS empty arrays (initially)
//Push single string data/elemnts into an array as a sigle element 
//Push array data into an array to form multi-d arrays 


//Single dimension arrays
var departmentID = [];
var departments = [];

//Multi dimension array
var employeeID = [];
var salaries = [];
var employeeName = [];

// Proccess the file charmerdepartments.txt
fs.readFile('departmentlist.txt', 'utf8', function(error, data) {
    if (error) throw error;

    // console logging the original data
    //  console.log("dirty:");
    // console.log(data);


    //Remove the uneeded string from the first line 
    var cleanDeptData = data.replace(/INSERT INTO `departments` Values/g, "");

    //convert cleaned data into a temporary array. Each line will be an array element
    var deptDataArray = cleanDeptData.split('\n');


//create multi -d arrays using the length of the number of departments 
    for (var i =0; i < deptDataArray.length; i++){
        
 }


    //  console logging the cleaned data
    // console.log("cleaned:");
    // console.log(cleanDeptData);

    // var deptDataArray = cleanDeptData.split('\n');
    //deptDataArray.shift(); to clean anything above line 1 that you dont want 
    // console.log(deptDataArray);

    //grab the department id and the department name and push them into their respective single -d arrays 
    for (var i = 0; i < deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));

    }
   
   
    //create multi -d arrays using the length of the number of departments 
     for (var i =0; i < deptDataArray.length; i++){
       employeeID.push([]);
       employeeName.push([]);
       salaries.push([]);
       
    }
    console.log(employeeID);


});

// process the file 'charmeremployees.txt'
//('10002,'d007','1996-08-03','9999-01-01'),
//mutli-d array = employeeID

fs.readFile('charmerdepartments.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values/g, "");


    var employeeDataArray = cleanEmployeeData.split('\n');

    for (var i = 0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(29, 33) == '9999') {
            // console.log(employeeDataArray[i]);
            var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values/g, "");


            var employeeDataArray = cleanEmployeeData.split('\n');

            for (var i = 0; i < employeeDataArray.length; i++) {
                if (employeeDataArray[i].slice(29,33) == '9999') {
                     employeeID[departmentID.indexOf(employeeDataArray[i].slice(9,13))].push(employeeDataArray[i].slice(2,7));
                     console.log(employeeID);
                }

            }

        }
    }

});
