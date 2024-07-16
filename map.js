//Code example
const myMap = new Map();

myMap.set('name','Haley')
myMap.set('age', 20);
console.log(myMap)



//How to .get a value from maps
const age = myMap.get('age')
console.log(age)

//Updating map values
myMap.set('age', 21)
console.log(myMap)

myMap.set('name', 'Brooklynn')
console.log(myMap)

//How to check if a key exists inside of the map using .has

console.log(myMap.has('name')) // 💭 Does the key 'name' exist in myMap?

console.log(myMap.has('first name')) // 💭 Does the key 'first name' exist in myMap?


// How to discover the size of myMap using .size
console.log(myMap.size);

//How to delete a key or value in myMap
myMap.delete('age');
console.log(myMap)