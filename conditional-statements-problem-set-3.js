/* 
    Spot the bug Challenge🐞
    Should print:" Most places consider you an adult."

*/

const age = 20;

if(age <3) {
    console.log("You're just a baby!")
} else if (age >= 3) {
    console.log("You're a big kid now.")
} else if (age >= 13) {
    console.log("You're entering the teenage phase.")
} else if (age >= 18) {
    console.log("Most places consider you an adult.")
} else {
    console.log("Mid life crisis ahead!!!")
}

/* The issue in this program is related to the sequence of the 'else-if' statements. The condition checking if the age is 18 or older should be moved to the second position to ensure the correct order of evaluation.

//This is the correct sequence:

const age = 20;

if(age <3) {
    console.log("You're just a baby!")
} else if (age >= 18) {  
    console.log("Most places consider you an adult.")
} else if (age >= 3) {
    console.log("You're a big kid now.")
} else if (age >= 13) {
    console.log("You're entering the teenage phase.")
} else {
    console.log("Mid life crisis ahead!!!")
}


// else if (age >= 18) is evaluted earlier in the program, solving the issue :)

*/
