/*
    1. Create an array called 'countries' of the following booleans:["France", "South Africa, "Brazil"," United States", "Sweden"]

    2. Filter over ' countries' and keep only the countries that have a blank space in their name (South Africa and United States)

    3. Print out both arrays

    HINT: Google "string contains" method.
*/

const countries = ["France", "South Africa", "Brazil"," United States", "Sweden"]

const blankCountries = countries.filter((country)=>{
     if(country.includes(" ")) {
        return true;
     }

     return false;
})

console.log(countries);
console.log(blankCountries)

//If I wanted to see the opposite result, I would change country.includes to !country.includes (countries that do NOT include a blank space character). It will print "France", "Brazil", "Sweden".