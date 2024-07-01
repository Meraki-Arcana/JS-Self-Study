
/*
    initializer; conditional check ; updater
    for( let i = 0 ; i < 10 ; i++) {
    // code here
}

*/

// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }



for(let str = 'monkey', i = 0; str !== 'banana'; i++) {
    if(i === 5) {
        str = 'banana'
    }
    console.log(i);
}

console.log('----------')

for(let i = 0; i < 100; i += 5){
    console.log(i);

    if(i === 25) {
        console.log("This is JUST BEFORE the break;")
    break;
    }
    
}

console.log("----------");

for(let i =0; i <100; i += 10) {
    console.log(i);

    if(i ===20) {
        i += 20; //20 + 20 + 10 (updater)
        continue;
    }

    if(i === 60) {
        break; //once the loop reaches 60, break.
    }
}