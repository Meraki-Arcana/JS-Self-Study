/*

    1. Create a for loop that runs ffrom 1 - 100.
    2. Every 10 loops, print out: Checkpoint! + the loop number.
    3. On loop 50 print out: Half way there!
    4. On the final loop (100) print out: You made it! All done :)

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it! All done :)
*/


for(let i = 1; i <=100; i++) {

    if(i === 50) {
        console.log('Half way there!');
        continue;
    }

    if(i === 100) {
        console.log("You made it! All done :)");
        continue;
    }

    if(i % 10 === 0) {
        console.log(`Checkpoint! ${i}`)
    }

}