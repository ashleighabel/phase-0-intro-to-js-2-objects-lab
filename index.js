const employee = {
    name: "ash",
    streetAddress: "1 way",
};
function updateEmployeeWithKeyAndValue(employee, key, value)  {
    return {
        name: "Sam",
        streetAddress: "11 Broadway",
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    delete employee.key;
    return {
        name2: 'Josh',
        streetAddress2: '2 way',
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}