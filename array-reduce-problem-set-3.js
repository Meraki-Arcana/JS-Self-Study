/*
    1. Create an the following array called "items": ["light", "banana", "phone", "book", "mouse"]

    2. Create a new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        -uses reduce to concatenate all the strings in "caps" using a space to separate each item.

    4. Print out "items","caps","concat"

    BONUS: Can you do steps 1 - 3 in one line?
*/

const items = ["light", "banana", "phone", "book", "mouse"];

const caps = items.map((item)=> {
    return item.toUpperCase();
    
})

const concat = caps.reduce((result, string)=>{
    return result + string + " ";
}, "")

console.log(items)
console.log(caps)
console.log(concat)

/* BONUS ****

const items = ["light", "banana", "phone", "book", "mouse"];

    .map((item) => {
        return item.toUpperCase();
    
})
    .reduce((result, string) => {
        return result + string + " ";
}, "")

console.log(items)
*/