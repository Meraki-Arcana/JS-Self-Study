/*
    1. Create a variable called "numbers" that points to a new Set

    2. Add the following numbers to "numbers" (each a separate line):
    1, 2, 3, 4, 5, 2, 3, 4

    3. Print out "numbers" and note what is inside it

    4. Repeat the same steps above but with an array.
*/


//Sets come in handy to automatically eliminate any duplicate values. In this case, the numbers: 3, 2, and 4 are ignored.

const numbers = new Set();

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(3)
numbers.add(2)
numbers.add(4)

console.log(numbers)


//An array will still include duplicate numbers and it'll become by job to filter out those numbers later:

const numbersArray = [1, 2, 3, 4, 5, 2, 3, 4];

console.log(numbersArray)