class Student{


constructor(sid,name,grade){
this.sid=sid;
this.name=name;
this.grade=grade;
}

display(){
    console.log(this.sid,this.name,this.grade);
}
}

let stu1=new Student(101,"Manick","A");
let stu2=new Student(102,"Rajan","B");
stu1.display();
stu2.display();
