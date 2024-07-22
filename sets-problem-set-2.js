/*
    1. Create an array called "numbers" with the following values:
    [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print it out to the terminal.

    HINT: Add the numbers to a Set as you for loop over "numbers".
*/


const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const duplicateDiscovered = new Set();

//looping through each individual item. . .
for(i = 0; i < numbers.length; i++) {
    //did we come across any duplicate items?  
    if(duplicateDiscovered.has(numbers[i])) {

        //Ah! Found one :)
        console.log(numbers[i])
        //break; out of the loop. 
    }
}

// if no duplicate numbers were found...
duplicateDiscovered.add(numbers[i]); //add those number to the Set


