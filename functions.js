/*

1. "Regular" Function:

    function printHello() {
        //code here
}

2. "Arrow" Function:

    const printHello = () => {
        //code here
    }

*/

const sayHello = () => { // function declaration
    console.log('This prints when the function is called.')
}

// Calling the function:
sayHello();
sayHello();
sayHello();

console.log('---------')

//Function with multiple parameters:

const sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(10, 10); //passing 10 and 10 as arguments (or values) for both parameters.
sum(20, 7); // passing 40 and 2 as arguements (or values) for each parameters.
sum(); // If I don't provide any arguments for the parameters,it will be assigned NaN or undefined by default.

console.log("---------");

const multiply = (num3, num4) => { //function declaration
    return num3 * num4; // 10 * 10
}

const result = multiply(10, 10)
//const result = 100;
console.log(result);

console.log("---------");

//No Return Value:

const hello = () => {
    console.log('Hello!')
    return "Hey there, friend!";
}

hello();
const greeting = hello();
console.log(greeting);

/*The result of calling the hello(); function results as undefined.
To override an undefined return value, provide it with a data type.In other words, provide it with your OWN value.
*/