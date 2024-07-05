/*

    Write a function called "login":

    1. The function has 2 parameters:
        - username: this should be a string.
        - password: this shoudl be a string.
    2.
        - username is "admin" (any password, doesnt matter) 
        - username is "BlissBurst" and password is "Oceana123" 
        - username is "ZestyZen" and password "ZenTales2024"
    
    3. In all other cases, return false.
    
    4. Test the function like so:
    - const test = login('LyricalDreamer', 'softEcho1998') // "test" should be false.
    - const test2 = login('Zesty-Zen', 'ZenTales2024') // "test2" should be true.
    - const test3 = login('admin','Admin300325') // "test3" should be true.
    - const test4 = login('BlissBurst','Oceana123') // "test4" should be true.
    - const test5 = login('Silent_Champion','Back2Reality') // "test5" should be false.
*/

const login = (username, password) => {
    if(username === 'admin') {
        return true;
    }
    if(username === 'BlissBurst' && password === 'Oceana123') {
        return true;
    }
    if(username === 'Zesty-Zen' && password === 'ZenTales2024') {
        return true;
    }

    return false;
}

    const test = login('LyricalDreamer', 'softEcho1998') // "test" should be false.
     const test2 = login('Zesty-Zen', 'ZenTales2024'); // "test2" should be true.
     const test3 = login('admin','Admin300325') // "test3" should be true.
     const test4 = login('BlissBurst','Oceana123') // "test4" should be true.
     const test5 = login('Silent_Champion','Back2Reality') // "test5" should be false.

    console.log(test);
    console.log(test2);
    console.log(test3);
    console.log(test4);
    console.log(test5);