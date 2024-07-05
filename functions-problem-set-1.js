/*

    Write a function called "noRainder":

    1. This function has two parameters:
    - number
    - mod

    2. The function will return:
    - true: if "number" is evely divisible by "mod" (no remainder)
    - false: if "number" is not evenly divisible by "mod" (has a remainder)

    3. Call your function:
    - const result1 = noRemainder(10, 7); // result1 should be false
    - const result1 = noRemainder(100, 10); // result1 should be true
*/

const noRemainder = (number, mod) => {
  if(number % mod === 0) {
    return true;
  }

    return false; // condensing the code
  
};


const result1 = noRemainder(10, 7); // result1 should be false
const result2 = noRemainder(100, 10); // result2 should be true
console.log(result1, result2)