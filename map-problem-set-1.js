/*
    1. Create a Map called "myPet" with the following entries:
        - name: "Cairo"
        - type: "Dog"
        - breed: "Poodle"
        - age: 3
        - friends: ["Lexii", "Girl", "Potato"]

    2. Print out myPet to the terminal.

    3. Add a new entry: color: "Black".

    4. Change breed to be "Labradoodle".

    5. Remove "Potato" from the list of friends for myPet.

    6. Print out "myPet" to the terminal again.

    7. Add "Chip" to the list of friends for myPet

    8. Print out myPet to the terminal one last time.
*/

const myPet = new Map();

myPet.set('name','Cairo')
myPet.set('type','Dog')
myPet.set('breed','Poodle')
myPet.set('age', 3)
myPet.set('friends', ['Lexii', 'Girl', 'Potato']);

console.log(myPet)

myPet.set('color','Black')
myPet.set('breed','Labradoodle')
console.log(myPet)

myPet.get('friends').pop()
console.log(myPet);

myPet.get('friends').push('Luna')
console.log(myPet)