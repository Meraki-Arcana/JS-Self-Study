/*

1. Create an array called "ages" with the numbers 20, 25, 30, 35, 40.

2. Create a new variable called "totalAge" using reduce that sums up the ages in "ages".

3.Print out "ages" and "totalAge".
*/

const ages = [20, 25, 30, 35, 40];

const totalAge = ages.reduce((result, age)=>{
    return result + age
}, 0)

console.log(ages);
console.log('----Result Below----')
console.log(totalAge);

/*
1. Create an array called "grades" with the numbers 85, 90, 92, 88, 95.

2. Create a new variable called "averageGrade" using reduce that calculates the average of the grades in "grades".

3. Print out "grades" and "averageGrade".

*/

const grades = [85, 90, 92, 88, 95];

const averageGrade = grades.reduce((sum, grade)=> {
    return sum 
}, 0)