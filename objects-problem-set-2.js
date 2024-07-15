/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.95}
        - const candy = {name:"reese", quantity: 1, price: 3.50}

    2. Create an object called "store" with the following properties:
        - storeNumber: 5
        - locationCity: "Milan"
        - locationCountry: "Italy"
        - products: ["banana","apple", "candy"]

    3. Print out "store" to the terminal.

    4. Only print out all the product objects in "store".

    5. Only print out the 3rd product object in "store".

    6. Change the price of the banana object through the store object to 1.75.

    7. Print out both "store" and "banana"

    8. Change the price o the candy object directly to be 4.99

    9. Print out both "store" and "candy".
*/


const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.95 };
const candy = { name: "galatines", quantity: 1, price: 3.5 };


const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};
console.log(store)



//Only print out all the product objects in "store".

console.log('----------')
for(let i = 0; i < store.products.length; i++) {
 console.log(store.products[i])
}

// Only print out the 3rd product object in "store".

console.log('-----------')
console.log(store.products[2])


console.log("-----------");


// Change the price of the banana object through the store object to 1.75.

//My process:Go to store → Go to the first item in the objects (banana) → Change the price to be equal to 1.75.

store.products[0].price = 1.75; 
console.log(store);
console.log(banana);


console.log('----------')

store.products[2].price = 4.99;
console.log(candy);


