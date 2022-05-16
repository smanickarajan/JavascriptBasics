const num = [3, 4];
console.log(num.length);
console.log(num[1]);

//add at the end of the array
num.push(5, 6);
console.log(num);

//add at beginning of the array
num.unshift(1, 2);
console.log(num);

//add at middle of the array
num.splice(2, 1, 'a', 'b');
console.log(num);

//Find an elemnt in array
const s = [1, 2, 1, 4, 5, 6];
console.log(s.indexOf(1));//1st occurance of 1
console.log(s.indexOf(8));// -1
console.log(s.indexOf(1, s.indexOf(1) + 1));

console.log(s.indexOf(2) != -1);
console.log(s.includes(6));

//Array can have objects

const courses = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Selenium' }


]

const c1=courses.find(function(course){
    return course.name==='Selenium';
});
console.log(c1);


const c2=courses.findIndex(function(course){
    return course.name==='Selenium';
});
console.log(c2);

const c3=courses.find (course=>course.name==='Selenium');
console.log(c3);