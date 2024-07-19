/*
    1. Create an object called "houseForSale" with the following properties:
        - squareFeet: 3200
        - value: 320000
        - streetName: "Carefree Lane"
        - built: "2016"
        - owner: {name: "Alyssa", age: 24}
        - offers: [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal.

    3. Delete the property with the key "built".

    4. Change the age of the owner to be 25 inside "houseForSale".

    5. Print our the maximum offerPrice (use reduce).

    6. Add a new entry: sale price: 312000.
    
    7. Print out "houseForSale" to the terminal.

*/

const houseForSale = new Map();
  houseForSale.set('squareFeet', 3065);
  houseForSale.set('value', 650000);
  houseForSale.set("streetName", "3200 Masters Pt");
  houseForSale.set('built', '1995');
  houseForSale.set('owner', { name: "Kyle", age: 34 });
  houseForSale.set('offers', [640000, 650000, 625000, 635000]);
console.log(houseForSale);

houseForSale.delete('built');
houseForSale.get('owner').age = 35;

const maxPrice = houseForSale.get("offers").reduce((max, price) => { if(price > max) {
  return price;
}
return max;}, 0)
console.log(maxPrice)

houseForSale.set('sale price', 312000)
console.log(houseForSale);