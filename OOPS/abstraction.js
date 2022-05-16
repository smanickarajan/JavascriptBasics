function Employee(name,age,basesal){
this.name=name;
this.age=age;
this.basesal=basesal;
let monthlybonus=1000;

let calculatefinalsal =function(){
    let finalsal= basesal+monthlybonus;

    console.log ('FinalSal '+finalsal);
}
this.getEmpDetails=function(){
    console.log('Name '+this.name+' Age :'+this.age);
    calculatefinalsal();
  
}
}


let emp1= new Employee('Johon',25,5000);
emp1.getEmpDetails();