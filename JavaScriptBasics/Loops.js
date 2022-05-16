const person = {
    name: 'Manick',
    age: 20
};

for (let key in person) {
    console.log(key + ':' + person[key]);
}


const color = ['red', 'green', 'blue'];

for (let col in color) {
    console.log(color[col]);
}

for (let col of color){
    console.log(col);
}