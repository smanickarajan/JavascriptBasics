class Employee {
    setEmpDetails(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName() {
        return this.name;
    }

    getEmpID() {
        return this.id;
    }

    getEmpPhoneNo() {
        return this.phoneNo;
    }


}

let emp1 = new Employee();
emp1.setEmpDetails('Jhon', 25, 9812345678);

console.log(emp1.getEmpID());
console.log(emp1.getEmpName());
console.log(emp1.getEmpPhoneNo());