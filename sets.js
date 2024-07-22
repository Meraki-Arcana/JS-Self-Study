const mySet = new Set(); // Set constructor function

mySet.add(10)
mySet.add(20)
mySet.add(30)
mySet.add(40)

console.log(mySet)

mySet.add(10)
mySet.add(10)
mySet.add(10)

console.log(mySet);

mySet.add("10")

console.log(mySet);

mySet.delete(20);
console.log(mySet)

console.log(mySet.has(30)) //Does mySet have the value 20?
console.log(mySet.has(300)); //Does mySet contain the value 300?

console.log(mySet.size);