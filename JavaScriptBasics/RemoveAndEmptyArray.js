let num=[1,2,3,4,5,6,];
const last=num.pop();
console.log(num);
console.log(last);

let num1=[1,2,3,4,5,6,];
const first=num1.shift();
console.log(num1);
console.log(first);

let num2=[1,2,3,4,5,6,];
num2.splice(3,1);
console.log(num2);


//Empty array
let num3=[1,2,3,4,5,6,];
num3=[];
console.log(num3);

let num4=[1,2,3,4,5,6,];
num4.length=0
console.log(num4);

let num5=[1,2,3,4,5,6,];
num5.splice(0,num5.length);
console.log(num5);

let num6=[1,2,3,4,5,6,];

while(num6.length>0){
num6.pop();
}
console.log(num6);

//  let num7=[1,2,3,4,5,6,];
// let num8=num7;
// num7=[];
// console.log(num7);
// console.log(num8); 

// let num7=[1,2,3,4,5,6,];
// let num8=num7;
// num7.length=0;
// console.log(num7);
// console.log(num8);

let num7=[1,2,3,4,5,6,];
let num8=num7;
num7.splice(0,num7.length);
console.log(num7);
console.log(num8);