const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter deposit amount: ");
        const num = parseFloat(depositAmount);

        if (isNaN(num) || num <=0){
            console.log( "Invalid! Please try agin.");
        }
        else{
            return num;
        }
    }
}

const lines = () =>{
    while(true){
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numOfLines = parseFloat(lines);

        if (isNaN(numOfLines) || numOfLines <=0 || numOfLines > 3){
            console.log( "Invalid! Please try agin.");
        }
        else{
            return numOfLines;
        }
    }
}

console.log(deposit());
console.log(lines())