class Test{
    static a=10;
    b=20;
   static m1(){
        console.log('m1 Method');
    }

    m2(){
        console.log('m2 Method');
    }

    
}

console.log(Test.a);
console.log(Test.b);//undefined
Test.m1();

let obj=new Test();
console.log(obj.b);
obj.m2();

Test.a=100;
console.log(Test.a);
