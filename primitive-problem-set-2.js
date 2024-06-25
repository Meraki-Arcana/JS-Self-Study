//Variables and Primitive Types Warmup - Javascript In Depth. (Part Two: Exercises - Problem Set 2)

/*

    1. Declare a variable using let with any name you'd like, but without a value.
    2. On a seperate line, assign the variable the string: "Moo!".
    3. Log out this variable to the terminal using console.log

    4. Repeat the above steps but try using a const vartiable. What happens?
*/

let sound; //Step 1
sound = "Moo!" //Step 2
console.log(sound); //Step 3

const duplicateSound; //Step 4
duplicateSound = "Moo!";
console.log(duplicateSound);

/* What happens is, the terminal screams at me because the const variable MUST be assigned a value. 

const duplicateSound = "Moo!" will work just fine because a value is present. */
