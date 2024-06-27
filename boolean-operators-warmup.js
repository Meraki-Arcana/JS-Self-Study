/*
    Write out the truth tables for the following boolean values, one on each side:

    —— AND (&&)
    —— OR (||)
    —— NOT (!)

    Use console.log to print the results for each.

    HINT: AND, and OR will have 4 possibilities, while NOT has 2.

    HINT 2: console.log(true && true);
*/


// Step 1: AND (&&)
    console.log('---AND---');
    console.log(true && true); //true
    console.log(true && false); //false
    console.log(false && true); //false
    console.log(false && false); //false

//Step 2: OR (||)

    console.log('---OR---');
    console.log(true || true); //true
    console.log(true || false); //false
    console.log(false || true); //false
    console.log(false || false); //false

//Step 3: NOT (!)
    console.log("---NOT---");
    console.log(!true);
    console.log(!false);

