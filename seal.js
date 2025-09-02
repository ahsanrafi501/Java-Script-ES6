const employee = {
    name: "Sabiha Sultana",
    designation: "QA",
    salary: 20000,
    experience: 1,
    age: 22,
};


employee.husband = "Ahsan Rafi";
Object.seal(employee);
employee.sleep = "10hrs"
employee.salary = employee.salary + 50000;
delete employee.experience;

console.log(employee);