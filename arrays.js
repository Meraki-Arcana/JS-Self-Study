const animals = ["monkey","dog","cat","koala"," elephant"];

console.log(animals);

const monkey = animals[0];
console.log(monkey);

const koala = animals[3];
console.log(koala);

console.log('----------')

//Looping through an array
for(let i = 0; i <= 3 ; i++) {
    console.log(animals[i]);
}

console.log("----------");
//Pushing a new item to an array using .push()

animals.push("cow");
console.log(animals);
console.log(animals.length);

console.log("----------");
//Removing an item using .pop()

animals.pop();
animals.pop();
animals.pop();
console.log(animals)

console.log("----------");
//Adding an item to the beginning of an array using .unshift()

animals.unshift("horse","zebra","bunny");
console.log(animals);

console.log("----------");
//Removing an item from the start of an array using .shift()

animals.shift()
animals.shift()
animals.shift()
console.log(animals);