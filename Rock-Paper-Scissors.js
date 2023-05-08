let cScore = 0
let pScore = 0
function getComputerChoice(numberINT, cSelect){
    var numberINT = Math.floor(Math.random()*3);
    console.log("var numberINT = " + numberINT);
    
    if (numberINT === 0) {
        var cSelect = "rock";
    } else if (numberINT === 1) {
        var cSelect = "paper";
    } else {
        var cSelect = "scissors";
    }
    console.log("var cSelect = " + cSelect);
    return cSelect
}
console.log("function getComputerChoice = " + getComputerChoice())

function playRound(pSelect, cSelect) {
var pSelect = prompt("pick one").toLowerCase();
console.log("var pSelect = " + pSelect)
var cSelect = getComputerChoice()
console.log("var cSelect = " + cSelect)
if (cSelect===pSelect){
    return "tie! Player Score = " + pScore + "; Computer Score = " + cScore;
} else if (cSelect === "rock") {
    if (pSelect==="paper") {
        return "WINNNN!!! " + pSelect+" beats "+cSelect+"! Player Score = " + ++pScore + "; Computer Score = " + cScore;
    }
    else {
        return "Lose!!! "+cSelect+" beats "+pSelect+"! Player Score = " + pScore + "; Computer Score = " + ++cScore;
    }
} else if (cSelect==="paper") {
    if (pSelect==="scissors") {
        return "WINNNN!!! " + pSelect+" beats "+cSelect+"! Player Score = " + ++pScore + "; Computer Score = " + cScore;
    }
    else {
        return "Lose!!! "+cSelect+" beats "+pSelect+"! Player Score = " + pScore + "; Computer Score = " + ++cScore;
    }
} else if (cSelect==="scissors") {
    if (pSelect==="rock") {
        return "WINNNN!!! " + pSelect+" beats "+cSelect+"! Player Score = " + ++pScore + "; Computer Score = " + cScore;
    }s
    else {
        return "Lose!!! "+cSelect+" beats "+pSelect+"! Player Score = " + pScore + "; Computer Score = " + ++cScore;
    }
}
}


console.log(playRound());
console.log(cScore);
console.log(playRound());
console.log(cScore);
console.log(playRound());
console.log(cScore);
console.log(playRound());
console.log(cScore);
console.log(playRound());
console.log(cScore);
