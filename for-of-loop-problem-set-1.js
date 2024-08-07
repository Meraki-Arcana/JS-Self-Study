/* Create a variable called ages that points to this array [10, 42, 15, 22, 11, 74, 39, 2] 

2. Create an array called results that starts off empty

3. User a for...of loop over ages and add an object to results with an age key having the value of the age being looped over. Also, add a "name" key that is always "Dragon".

For example: {age: 10, name: "Dragon" },{age:, name: "Dragon"}*

4. Print out "results"

5. "results" should be:
[{age:10, name: "Dragon"}, {age:42, name: "Dragon"}
{age:15, name: "Dragon"}, {age:22, name: "Dragon"}
{age:11, name: "Dragon"}, {age:74, name: "Dragon"}
{age:39, name: "Dragon"}, {age:2, name: "Dragon"}]

*/

const ages = [10, 42, 15, 22, 11, 74, 39, 2];

const results = [];

for(const age of ages) {
    const dragonObject = {
        age: age,
        name: "Dragon"
    }

    results.push(dragonObject)
}

console.log(results)
