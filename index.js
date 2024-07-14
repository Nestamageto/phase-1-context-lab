/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

// Function to create an employee record
// Function to create an employee record
// Function to create an employee record
/* Your Code Here */
function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    });
    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(event => event.date);

    const payable = eligibleDates.reduce((memo, date) => {
        return memo + wagesEarnedOnDate.call(this, date);
    }, 0);

    return payable;
};

// New functions to add
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
}

// Testing the code
const testEmployee = createEmployeeRecord(["John", "Doe", "Manager", 25]);
console.log(testEmployee);

const testEmployees = createEmployeeRecords([
    ["John", "Doe", "Manager", 25],
    ["Jane", "Smith", "Supervisor", 20],
]);
console.log(testEmployees);

const testEmployeeWithTimeEvents = createEmployeeRecord(["John", "Doe", "Manager", 25]);
createTimeInEvent.call(testEmployeeWithTimeEvents, "2023-06-30 09:00");
createTimeOutEvent.call(testEmployeeWithTimeEvents, "2023-06-30 17:00");
console.log(hoursWorkedOnDate.call(testEmployeeWithTimeEvents, "2023-06-30"));

console.log(wagesEarnedOnDate.call(testEmployeeWithTimeEvents, "2023-06-30"));

const employees = createEmployeeRecords([
    ["John", "Doe", "Manager", 25],
    ["Jane", "Smith", "Supervisor", 20],
]);
createTimeInEvent.call(employees[0], "2023-06-30 09:00");
createTimeOutEvent.call(employees[0], "2023-06-30 17:00");
createTimeInEvent.call(employees[1], "2023-06-30 10:00");
createTimeOutEvent.call(employees[1], "2023-06-30 18:00");

console.log(findEmployeeByFirstName(employees, "John"));
console.log(calculatePayroll(employees));
