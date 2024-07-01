/* 
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! (And the loop number)
    3. On loop 50 print out: Half way there!
    4. On the final loops (100) print out: You made it! All done :)
    
    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it! All done :)

    Goal: Find a solution that automates the repetition.
    HINT: Look up the "continue" keyword for loops.

*/


/* Here is my failed attempt:

let number = 1;

while(number <= 10) {
    console.log(number)

    if(number === 10) {
        continue;
    }
    number++;

    if(number === 20) {
        continue;
    }
    number++;

    if(number === 30) {
        continue;
    }
    number++;

    if(number === 40) {
        continue;
    }
    number++;

    if(number === 50) {
        console.log("Half way there!")
        continue;
    }
    number++;

    if(number === 60) {
        continue;
    }
    number++;

    if(number === 70) {
        continue;
    }
    number++;

    if(number === 80) {
        continue;
    }
    number++;

    if(number === 90) {
        continue;
    }
    number++;

    if(number === 100) {
        console.log("You made it! All done :)")
        break;
    }
}

*/

let count = 1;

while (count <= 100) {

    if(count === 50) {
        console.log("Half way there!")
        count++;
        continue;
    }

    if(count ===100) {
        console.log("You made it!")
        count++;
        continue;
    }

    if(count % 10 === 0) {
        console.log(`Checkpoint! ${count}`)
    }
    count++;
}

console.log("All done :)");

