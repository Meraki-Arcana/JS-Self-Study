/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array.
    3. Add the string "Sun" to the START of the array.
    4. Remove the last two strings from the array.
    5. Remove the first two strings from the array.

    *Print out the array after each step ^
*/


    const planets = ["Mercury","Venus","Earth","Mars"]

    console.log(planets);

    console.log('---------')
//Step 2:

planets.push("Jupiter"); 
console.log(planets);

console.log("---------");

//Step 3:
planets.unshift("Sun");
console.log(planets);

console.log("---------");


//Step 4:
planets.pop()
planets.pop()
console.log(planets);

console.log("---------");


//Step 5:
planets.shift()
planets.shift()
console.log(planets);