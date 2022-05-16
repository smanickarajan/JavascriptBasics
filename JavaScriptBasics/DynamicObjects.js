const circle={
    radius :1,
    color: 'red',
    log(){
        console.log ('log method');
    }
}

console.log(circle);
circle.price=1000;
console.log(circle);
circle.draw=function(){}
console.log(circle);

delete circle.color;
console.log(circle);