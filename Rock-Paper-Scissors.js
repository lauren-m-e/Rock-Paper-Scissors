function getcomputerSelection (max) {
    return Math.floor(Math.random() * max);
}

var numberINT = getcomputerSelection(3);
console.log(numberINT);

if (numberINT === 0) {
    var computerSelection = "Rock";
} else if (numberINT === 1) {
    var computerSelection = "Paper";
} else {
    var computerSelection = "Scissors";
}
console.log("Computer Selection is " + computerSelection);



