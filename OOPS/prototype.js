let Empdetails = function (name, age) {
    this.name = name;
    this.age = age;
}
Empdetails.prototype.getName = function(){
    return this.name;
}

Empdetails.prototype.getAge = function(){
    return this.age;
}
let emp1 = new Empdetails('Jhon', 30);
let emp2 = new Empdetails('Peter', 40);

console.log(emp1.getName());
console.log(emp2.getAge());