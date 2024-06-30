/* Conditional Check:

while( i < 10 ) {
    //code here
    }
    
    */


/*  1. Check condition to enter: i < 3
    2. Run this code: console.log(i)
    3. Go back to the loop conditional: i < 3

    let i = 0;

    while( i < 3 ) {
    console.log(i)
    i++; // i = i + 1
    }
*/

const greeting = "Hey you!";

let number = 0;

   while(number < 3) { // while true, print the greeting
    console.log(greeting);
    number++; // number = number + 1;
}
console.log("--------");

//Using the "break" keyword:

let counter = 5;

while ( counter <= 10 ) {
    console.log(counter);
    break;
    console.log("increasing counter...")
    counter++; //Notice how i++ greys out. The program halts at the "break" keyword.
}

console.log("Loop completed!")
console.log("--------");




/* Infinite loops can crash the computer so make sure to Ctrl +C 

let score = 0;

while(true) {
    console.log("inside the loop!");
}
console.log("Loop completed")
*/


// How can one create an infinite loop with a break statement???

let score = 0;

while (true) {
    console.log("inside the loop!");

    if(score >= 3) {
        break;
    }

    score++
}
console.log("Loop completed");

