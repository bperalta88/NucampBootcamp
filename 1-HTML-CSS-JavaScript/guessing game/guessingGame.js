let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}




const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    }
    else {
        guess =  prompt("Too low! Enter a new guess:");

    }
}
if(guess === 'q') {
    console.log("OK, QUITTING!")
}
else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} tries to get the right answer!`)
}
