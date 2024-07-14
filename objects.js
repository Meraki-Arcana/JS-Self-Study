const animal = {
    id: 7,
    name: "Girl",
    type: "dog",
    originCountry: "United States"
};
console.log(animal)
console.log('-------')

animal["name"] = "Lexii" //updating the name property
console.log(animal)
console.log("-------");

//Deleting a property inside an object

delete animal.originCountry;
console.log(animal)
console.log("-------");

//How to locate a property inside an object using the 'in' keyword:

console.log("name" in animal)
console.log("-------");

//I'm asking Javascript if "name" is INSIDE of the animal object. The 'in' keyword will only look for the KEY inside an object, not the variable in relation to the key.

//How to print all of the KEYS inside an object using the Object.keys method:

console.log(Object.keys(animal)); //Passing 'animal' to Object.keys as an argument.
console.log("-------");


//How to print all of the VALUES inside an object using the Object.values method:

console.log(Object.values(animal)); //Passing 'animal' to Object.keys as an argument.
console.log("-------");


//How to print the KEY: VALUE pair inside an object using the Object.entries method:

console.log(Object.entries(animal))
