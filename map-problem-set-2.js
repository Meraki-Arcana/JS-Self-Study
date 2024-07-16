/*
    1. Create the following 3 objects:
        - const banana = { name: "banana", quantity: 1, price: 1.95 };
        - const apple = { name: "apple", quantity: 1, price: 1.45 };
        - const galantine = { name: "galatines", quantity: 1, price: 3.50 };

    2. Create a Map called "store" with the following entries:
        - storeNumber: 5
        - locationCity: "Milan"
        - locationCountry: "Italy"
        - products: ["banana","apple", "galantine"]

    3. Print out "store" to the terminal.

    4. Only print out all the product objects in "store".

    5. Only print out the 3rd product object in "store".

    6. Change the price of the banana object through the store Map to be 1.75.

    7. Print out both "store" and "banana".

    8. Change the price of the galantine object directly to be 4.99.

    9. Print out both "store" and "galantine"
*/


//Step One
const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const galantine = { name: "galantine", quantity: 1, price: 3.50 };

const store = new Map(); //Step Two


//Step Three
store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, galantine]);

console.log(store);
console.log('-----------')


//Step Four
for(let i = 0; i < store.get("products").length; i++) {
    console.log(store.get("products")[i])
}

console.log("-----------");

console.log(store.get("products")[2]) //Step Five



store.get("products")[0].price = 1.75; 

galantine.price = 4.99;

console.log(store); 
console.log(galantine);