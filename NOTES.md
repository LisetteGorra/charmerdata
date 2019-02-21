var departments = ["management","training","smartPeople"]
var departmentID = ["d01","d02","d03"];
var employeeID = [[101, 102, 103],[201, 202, 203],[1005, 1111, 303]];
var employeeName = [["Max", "Aurthur", "Riley"], ["Zoe", "Jade", "Norma"], ["Jed","Chris","Dante"]];

employeeID[2][1] = 1003;

line 6 is a way to get employee id number into array while using the console



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
fs.readFile('charmerdepartments.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    // console logging the original data
    //  console.log("dirty:");
    // console.log(data);
    
    
    //Remove the uneeded string from the first line 
    var cleanDeptData = data.replace(/INSERT INTO `departments` Values/g, "")
   
   //convert cleaned data into a temporary array. Each line will be an array element
   
   
   //console logging the cleaned data
    // console.log("cleaned:");
    // console.log(cleanDeptData);
    
    var deptDataArray = cleanDeptData.split('\n');
    console.log(deptDataArray);
    
    
    
      var deptDataArray = cleanDeptData.split('\n');
    //deptDataArray.shift(); to clean anything above line 1 that you dont want 
    console.log(deptDataArray);

    for (var i = 0; i < deptDataArray.length; i++) {
        var deptId = deptDataArray[i].slice(2,6);
    }
    slice returns 1st item and makes it return as an array 




// push 

  for (var i = 0; i < deptDataArray.length; i++) {
        var deptId = deptDataArray[i].slice(2,6);
        console.log(deptId);
        
        departmentID.push(deptId);

    }
    
    turn into 
    
     for (var i = 0; i < deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2,6));

    }
    
    
    we just did dept id, below we will do dept name 
    
     for (var i = 0; i < deptDataArray.length; i++) {
        // departmentID.push(deptDataArray[i].slice(2,6));
        
        departmentID.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));

    }
    
    console.log(departmentID);
    console.log(departments);
    
});