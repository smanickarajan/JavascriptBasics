let fruits=['Apple','Banana','Grapes']
console.log(fruits[1])
fruits.push('Cherry')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.push('Lemon')
fruits.push('Apple')
console.log(fruits)
delete fruits[2]
console.log(fruits)
fruits[2]='Watermelon'
console.log(fruits)
let x=fruits.slice(1,2)
console.log(x)