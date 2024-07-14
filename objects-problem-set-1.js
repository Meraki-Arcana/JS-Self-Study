/*
    1. Create an object called "myPet" with the following properties:
        - name: "Lexii"
        - type: "Dog"
        - breed: "Maltese"
        - age: "4"
        - friends: ["Girl", "Thomas", "Potato"]

    2. Print out "myPet" to the terminal.

    3. Add a new property: color: "white"

    4. Change "breed" to be "Husky"

    5. Remove "Potato" from the list of friends.

    6. Print out "myPet" to the terminal again.

    7. Add "Wesley" to the list of friends for "myPet".

    8. Print out "myPet" to the terminal again.
*/

const myPet = {
  name: "Lexii",
  type: "Dog",
  breed: "Maltese",
  age: "4",
  friends: ["Girl", "Thomas", "Potato"],
};

console.log(myPet);

myPet.color = "White";
myPet["breed"] = "Husky";
console.log(myPet)

delete myPet.friends.pop("Potato");
console.log(myPet)

myPet.friends.push("Wesley");
console.log(myPet)

