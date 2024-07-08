/*
    1. Create an array called 'bools' of the following booleans: [true, true, false, true,false, false]

    2. Map over 'bools; and do the following:
        -if "true", return a random number in it's place.
        -if "false", return 0.
    
    3. Print out both arrays

    
*/

const bools = [true, true, false, true, false, false];

const mappedBools = bools.map((bool) => {
  if (bool === true) {
    return Math.random();
  } else {
    return 0;
  }
});

console.log(mappedBools);
console.log(bools);
