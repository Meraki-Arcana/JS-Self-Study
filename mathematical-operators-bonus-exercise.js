/*

    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. What about when you add booleans together?

    Try to think about how these behaviors might work, as well as why it might happen.

*/

let strings = "Hey" + " " + "there!"
console.log(strings);

let number = "dog" + 10;
console.log(number);

//Mixing these different data types is NOT common. Don't do it.

let boolean = true + false;
console.log(boolean);

//Most programming languages treat "true" as 1, and "false" as 0. That's why the result is 1.

