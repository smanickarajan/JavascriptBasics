//Enumerating properties of an object
//Get all properties of an object

const circle = {
    radius: 1,
    log() {

    }
};

//for in loop

for (let key in circle) {
    console.log(key, circle[key]);
}

//for of loop
for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

//in operator
if ('radius' in circle) {
    console.log('Yes')
}

if ('draw' in circle) {
    console.log('Yes')
}

if ('log' in circle) {
    console.log('Yes')
}