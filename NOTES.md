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


full code :

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
        // departmentID.push(deptDataArray[i].slice(2,6));
        
        departmentID.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));

    }
    
    console.log(departmentID);
    console.log(departments);
    
});



clean employee data 

fs. readFile('charmerdepartments.txt', 'utf8', function(err, data){
    if(err) throw err;
   var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values/g, "");
   
        
        var employeeDataArray = cleanEmployeeData.split('\n');

        for ( var i = 0; i < employeeDataArray.length; i++){
            if(employeeDataArray[i].slice(29,33) == '9999'){
                console.log(employeeDataArray[i]);
                
                // finding the index of 
                     console.log(employeeDataArray[i].slice(9, 13)); <<< dept
                    departmentID.indexOf(employeeDataArray[i].slice(8, 12)); << dept index
                                        console.log(employeeDataArray[i].slice(2, 6)); << this will give you employee id as well 
then add 
 employeeID[departmentID.indexOf(employeeDataArray[i].slice(9, 13))].push(employeeDataArray[i].slice(2, 6)); 
 
 and clean up like so:
 
   for (var i = 0; i < employeeDataArray.length; i++) {
                if (employeeDataArray[i].slice(29, 33) == '9999') {
             employeeID[departmentID.indexOf(employeeDataArray[i].slice(9, 13))].push(employeeDataArray[i].slice(2, 6));
                }
                
                (we have refactored the code above)
                    
            }
            
        }