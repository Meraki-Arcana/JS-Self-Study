//Variables and Primitive Types - Javascript In Depth (Part One)

/* There are 7 primitive data types in Javascript:
—— Strings: 'Hey Meraki!'
—— Numbers: 1118
—— Booleans: true/false
—— Null
—— Undefined
—— BigInt: rarely used.
—— Symbol: rarely used.




//STRINGS EXERCISE: DECLARE a variable (or create a variable) named city. Then, ASSIGN it a value called "Monument".
/* The 'let' keyword tells JavaScript that a variable is being defined and is typically followed by the variable name that it will be referred to. */

let city = "Monument";

//Alternatively, variables can be DECLARED, but not ASSIGNED a value (or INITIALIZED) until much later:

let country; //DECLARED variable
country = "United States"; //Here, the variable is assigned the value of "United States"

//To REASSIGN (or change) the value of a variable, simply change what is inside the double quotes (or single quotes)

country = "Japan"; //Country is REASSIGNED to "Japan".

/* Unlike the flexible 'let' keyword, the 'const' keyword can not be changed after the variable has been assigned and initialized.*/

const name = "Meraki"; // The value of the name variable can not be reassigned to something else.
const birthdayMonth = "November"; // My birth month will never change.
const generation = "Milennial"; // The generation I was born in will never change.

//NUMBERS EXERCISE

const age = 27;
let price = 11.18; // The value of this variable can be reassigned...
price = 11.20;

//BOOLEAN EXERCISE

let happy = true;
let sad = false;
let hungry = true;
let sleepy = false;

//NULL & UNDEFINED EXERCISE:

const empty = null;
const empty2 = undefined;