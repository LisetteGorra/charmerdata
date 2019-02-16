var business = "Dept Co.";
var departmentID = ["d001", "d002", "d003", "d004"];
var departments = ["management", "development", "sales", "marketing"];
var employeeID = [[100, 102, 103, 104, 105], [200, 201, 202, 203, 204, 205], [300, 301, 302, 303, 304, 305], [400, 401, 402, 403, 404, 405]];
var salaries = [[8500, 8500, 8500, 8500, 8500], [9500, 9500, 9500, 9500, 9500], [10500, 10500, 10500, 10500, 10500],[11500, 11500, 11500, 11500, 11500]];
var employeeName = [["Ruth", "Shirly", "Kim"], ["Blanch", "Kate", "Barbs"],["Tony", "Tom", "Chris"]]


console.log(`departments ${departmentID[0]} employee name: ${employeeName[0][0]}`);


for (var i = 0; i < departmentID.length; i++){
    console.log(`Department ${departmentID[i]} - ${departments[i]}:`);
}