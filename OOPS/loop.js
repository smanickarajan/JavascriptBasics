let fruits=['Apple','Banana','Grapes'];

let x;
console.log('Output of first for loop')
for (x in fruits){
   
console.log(fruits[x])
}

console.log('Output of second for loop')
for (x of fruits){
    console.log(x)
    }