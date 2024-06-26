//Booleans return 'true'/ 'false'
//Optional: find a VSCode Font that supports ligatures for a 'funky equal sign'


// strict equality
console.log(5 === 5);
console.log(5 === 4);

// strict inequality
console.log('--------');

console.log(2 !== 3); // true, two is not equal to 3.
console.log( 9 !== 9); //false, nine is equal to nine.

//boolean mathematical operators
console.log('--------')

console.log(3 < 4);
console.log(11 > 18);
console.log( 4 >= 2);
console.log (3 <= 1);

//'&&' operators
console.log('---------')

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// '||' operators
console.log("---------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('----------')

console.log(!true);
console.log(!false);


console.log("----------");

let test1 = true && "bananas";
console.log(test1);

/* The value of "true" is completely ignored because its a truthy value. Bananas is evaluated because of the && operant and points to test1, passing the test. Therefore, the console will print bananas. */

let test2 = false && "oranges";
console.log(test2);

/* The value of "false" is evaluated and points to test2, but automatically fails the test. Therefore, "oranges" is completely ignored and this returns false in the console. */

let test3 = 0 && "oranges";
console.log(test3);

/* "0" is evaluated as a falsy value and points to test3. It automatically fails the test. Therefore, "oranges" is completely ignored, and this returns "0" to the console. */

console.log("----------");

let test4 = true || "bananas";
console.log(test4);

/* The value of "true" points to test4 and the automatically passes this test. Therefore, the console will print true. */

let test5 = false || "oranges";
console.log(test5);

let test6 = 0 || "oranges";
console.log(test6);

console.log("----------");

let test7 = 0 ?? "cucumbers";
console.log(test7);

/* The first value in the statement is treated as a truthy value, therefore the console will print "0". */

// So now, "cucumbers" is printed in the console. This always occurs when using a Nullish Coalescing (??) operator.

let test8 = "cucumbers" ?? 0;
console.log(test8);

console.log("----------");

// Brady has entered the console
console.log('Brady and I are chatting right now @ 8.55p.m June 24, 2024')
console.log("Brady said, 'computery' @ 8.55p.m June 24, 2024");