var fs = require("fs");

//Step 1 - create all single-d and multi-d arrays AS empty arrays (initially)
    //Push single string data/elemnts into an array as a sigle element 
    //Push array data into an array to form multi-d arrays 


//Single dimension arrays
var departmentID = [];
var departments = [];

//Multi dimension array
var employeeID = [[]];
var salaries =[[]];
var employeeName = [[]];

// Proccess the file charmerdepartments.txt
fs.readFile('departmentlist.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    // console logging the original data
    //  console.log("dirty:");
    // console.log(data);
    
    
    //Remove the uneeded string from the first line 
    var cleanDeptData = data.replace(/INSERT INTO `departments` Values/g, "")
   
   //convert cleaned data into a temporary array. Each line will be an array element
   
   
 //  console logging the cleaned data
    // console.log("cleaned:");
    // console.log(cleanDeptData);
    
    var deptDataArray = cleanDeptData.split('\n');
    //deptDataArray.shift(); to clean anything above line 1 that you dont want 
    // console.log(deptDataArray);

    //grab the department id and the department name and push them into their respective single -d arrays 
    for (var i = 0; i < deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2,6));

    }
    
    console.log(departmentID);
    
});


























// var business = "Dept Co.";
// var departmentID = ["d001", "d002", "d003", "d004"];
// var departments = ["management", "development", "sales", "marketing"];
// var employeeID = [[100, 101, 102, 103, 104, 105], [200, 201, 202, 203, 204, 205], [300, 301, 302, 303, 304, 305], [400, 401, 402, 403, 404, 405]];
// var salaries = [[8500, 8500, 8500, 8500, 8500, 8500], [9500, 9500, 9500, 9500, 9500, 9500], [10500, 10500, 10500, 10500, 10500, 10500],[11500, 11500, 11500, 11500, 11500, 11500]];
// var employeeName = [["Ruth", "Shirly", "Kim"], ["Blanch", "Kate", "Barbs"],["Tony", "Tom", "Chris"]]


// console.log(`departments ${departmentID[0]} employee name: ${employeeName[0][0]}`);


// for (var i = 0; i < departmentID.length; i++){
//     console.log(`Department ${departmentID[i]} - ${departments[i]}:`);
//         for(var j =0; j < employeeID[i].length; j++) {
//             console.log(` ${j+1}. Employee ID: ${employeeID[i][j]}, Name: ${employeeID[i][j]}, Salary: ${salaries[i][j]}`);
//         }
    
// }


// Time is a nested forloop