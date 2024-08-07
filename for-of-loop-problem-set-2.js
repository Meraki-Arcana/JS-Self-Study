/* 1. Create an empty Set called "names"

2. Create another empty Set valled "capsNames"

3. Add the following names to the set:
- Bilbo
- Hermione
- Spock
- Leia

4. Use a for...of loops to loops over "names" and add the capitalized version of each name to the "capsNames" set

5. Print our "capsNames"
*/

const names = new Set();

const capsNames = new Set();

names.add("Bilbo")
names.add("Hermione");
names.add("Spock");
names.add("Leia");

console.log(names)

for(const name of names) {
    capsNames.add(name.toUpperCase());
}

console.log(capsNames)