const circle = {
    radius: 1,
    log() {

    }
}

//using for in loop
const another={};
console.log(another);

for (let key in circle) {
    another[key]=circle[key];
}

console.log(another);

//using object assign
const another1=Object.assign({},circle);
console.log(another1);

const another2=Object.assign({color:'red'},circle);
console.log(another2);
console.log(circle);


//using spread operator
const another3={... circle};
console.log(another3);