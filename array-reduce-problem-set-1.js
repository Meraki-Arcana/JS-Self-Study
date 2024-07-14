/*
    1. Create an array called 'companies' of the following strings: ["Apple","Tesla", "SpaceX","Amazon","Meta","Google"]
    2. Create a const called "modded" that reduces the "companies" array to a string of companies that DO NOT start with the letter A, separated by dashes
    3. Print our "companies" and "modded"
    */

    const companies = ["Apple", "Tesla", "SpaceX", "Amazon", "Meta", "Google"];

    const modded = companies.reduce((result, company, i) =>{
        if(company.startsWith("A")) {
            return result
        }

        if(i === companies.length - 1) {
            return result + company
        }

    return result + company + "-"
    }, " ")

    console.log(companies)
    console.log('----------')
    console.log(modded)