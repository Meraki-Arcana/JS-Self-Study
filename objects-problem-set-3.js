/*
    1. Create an object called "houseForSale" with the following properties:
        - area: 940
        - value: 320000
        - streetName: "Noir Blvd"
        - built: "2012"
        - owner: {name: "Lewis", age: 30}
        - offers: [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal.

    3. Delete the property with the key "built".

    4. Change the age of the owner to be 31.

    5. Print out the maximum offerPrice (use reduce).

    6. Add a new property: "sale price": 312000.

    7. Print out "houseForSale" to the terminal.

*/


const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Noir Blvd",
  built: "2012",
  owner: { name: "Neo", age: 30 },
  offers: [290000, 295000, 315000, 312000],
};
console.log(houseForSale);

delete houseForSale.built
console.log("-----------");


houseForSale.owner.age = 31;
console.log(houseForSale)

console.log('-----------')

const maxPrice = houseForSale.offers.reduce((max, price) => {
    if(max < price) {
        return price
    }
    return max;
}, 0)

console.log(maxPrice)


houseForSale["sale price"] = 312000
console.log(houseForSale);