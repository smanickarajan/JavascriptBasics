class Employee{
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
console.log("welcome");
let emp1 = new Employee('Peter', 1001);
let emp2 = new Employee('David', 1002);


console.log(emp1.name);
console.log(emp1.id);
console.log(emp2.name);
console.log(emp2.id);