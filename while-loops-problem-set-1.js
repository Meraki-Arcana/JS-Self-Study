/*

    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops "loggedIn" as false.
    3. Each loop, print out: "Incorrect login credentials."
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loops are completed, print out: "successully logged in!"

    HINT: Be careful for an infinite loop!
    HINT: Use Ctrl + C to cancel the loop.

*/


let loggedIn = false;
let loopCounter = 0;

while(!loggedIn) {
    console.log(loopCounter); // shows the number of login attempts
    if(loopCounter === 2) {
        loggedIn = true;
    }

loopCounter++;
}

//after the loop
console.log("Successfully logged in!");