/* 
    1. Create a variable called "loggedIn" that starts of as false.
    2. Create a for loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    4. After 3 loop iterations, change "loggedIn" to be true.
    5. After the loop is complete print out: "Successully logged in!"

    HINT 1: This is more challenging with a for loop.
    HINT 2: This is not an ideal candidate for a loop.
    HINT 3: You don't have to provide all parts of the for loop construct.
*/

for(let loggedIn = false, i = 1; !loggedIn; i++) {
    console.log("Incorrect login credentials.");

    if(i === 3) {
        loggedIn = true;
    }

}
console.log("Successully logged in!");