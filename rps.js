/* Variables************************************************************************************************************************** */

var storedPlayerLevel = 0;
var storedPlayerPoints = 0;
var storedComputerLevel = 0;
var storedComputerPoints = 0;

let computerWins = "Computer Player Wins!";
let playerWins = "Player One Wins!";
let roundTie = "This round is a tie!";

let player999End = "Message";
let computer999End = "Message";

const computerAttacks5 = ["rock", "paper", "scissors"];
const computerAttacks10 = ["rock", "paper", "scissors", "jagged rock"];
const computerAttacks15 = ["rock", "paper", "scissors", "jagged rock", "wet rock"];
const computerAttacks20 = ["rock", "paper", "scissors", "jagged rock", "wet rock", "wadded paper"];
const computerAttacks25 = ["rock", "paper", "scissors", "jagged rock", "wet rock", "wadded paper", "folded paper"];
const computerAttacks30 = ["rock", "paper", "scissors", "jagged rock", "wet rock", "wadded paper", "folded paper", "titanium scissors"];
const computerAttacks35 = ["rock", "paper", "scissors", "jagged rock", "wet rock", "wadded paper", "folded paper", "titanium scissors", "air scissors"];

/* Restart**************************************************************************************************************** */
function startNewGame(){
    sessionStorage.clear();
}

/* Check Level Function**************************************************************************************************************** */
function checkLevel(){
    storedPlayerLevel = Math.floor(storedPlayerPoints / 100) + 1;
    if (storedPlayerLevel > 1000) {
    alert("Thank you for playing. Remember to sleep, hydrate, move, and eat nutritious foods!")
    }
    storedComputerLevel = Math.floor(storedComputerPoints / 100) + 1;
    if (storedComputerLevel > 1000 ){
        alert("Would you like to retry?")
    }
}

/* Click Rock Button**************************************************************************************************************** */
function clickRockButton(){

    if (storedComputerLevel <= 5) {
      
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "rock") {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + roundTie;
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + roundTie;
        } else if (computerAttacks10[number] === "scissors") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + roundTie;
        } else if (computerAttacks15[number] === "scissors") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + roundTie;
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } 
        else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + roundTie;
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
           document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins; 
        } else if (computerAttacks25[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if(computerAttacks25[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;            
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
        }       
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if(computerAttacks30[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } else if (computerAttacks35[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if(computerAttacks35[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;            
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " +computerWins;
        }
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel); 
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}

/* Click Jagged Rock Button**************************************************************************************************************** */
function clickJaggedRockButton(){
    if (storedComputerLevel <= 5) {
        storedComputerPoints +=10;
        storedPlayerPoints +=25;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else if (computerAttacks10[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else if (computerAttacks10[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else {
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + roundTie;
        } 
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;

        } else if (computerAttacks15[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else if (computerAttacks15[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else if (computerAttacks15[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + roundTie;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + roundTie;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + computerWins;
        }
        
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + roundTie;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
        }       
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "titanium scissors") {
                storedComputerPoints +=10;
                storedPlayerPoints +=25;
                console.log(playerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;            
        }
         else if (computerAttacks30[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
        } 
        
    } 
    else if(storedComputerLevel >= 30 && storedComputerLevel <= 35) {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        }  else if (computerAttacks35[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + computerWins;
        } 
        }
    checkLevel();
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}

/* Click Wet Rock Button**************************************************************************************************************** */
function clickWetRockButton(){
    if (storedComputerLevel <= 5) {
      
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        } else if (computerAttacks5[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        }

    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else if (computerAttacks10[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else if (computerAttacks10[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        } else if (computerAttacks10[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
        }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else if (computerAttacks15[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else if (computerAttacks15[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
        } else if (computerAttacks15[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins; 
        } else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + roundTie;
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if (computerAttacks20[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else if(computerAttacks20[number] === "wadded paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + roundTie;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } else if (computerAttacks25[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins; 
        } else if(computerAttacks25[number] === "wadded paper" || "folded paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + roundTie;
        }      
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if (computerAttacks30[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else if(computerAttacks30[number] === "wadded paper" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins; 
        } else if(computerAttacks35[number] === "wadded paper" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } 
        else if (computerAttacks35[number] === "wet rock") {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML ="Computer chose " + computerAttacks35[number] + "! " + computerWins;
        }
    }   

    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel); 
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}

/* Click Paper Button**************************************************************************************************************** */
function clickPaperButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + roundTie;
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "paper"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + roundTie;
    } else if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + computerWins;
    } else {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "paper"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + roundTie;
    } else if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
    } else {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + roundTie;
        } else if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + computerWins;
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + roundTie;
        } else if (computerAttacks25[number] === "scissors" || "jagged rock" || "folded paper"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " +playerWins;
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        } else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } else if (computerAttacks35[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + computerWins;
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        }
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel);
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel; 
}

/* Click Wad Paper Button**************************************************************************************************************** */
function clickWadPaperButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints += 10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints += 25;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints += 10;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints += 25;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints += 10;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints += 25;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
       if (computerAttacks20[number] === "wadded paper"){
        storedPlayerPoints += 5;
        storedComputerPoints +=5;
        console.log(roundTie);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + roundTie;
       }
        else if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedPlayerPoints += 25;
            storedComputerPoints += 10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints += 25;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + roundTie;
           }
            else if (computerAttacks25[number] === "scissors" || "jagged rock" || "folded paper"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
            }     
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
           }
            else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
            } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks30[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML ="Computer chose " + computerAttacks30[number] + "! " + roundTie;
           }
            else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " +playerWins;
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
                document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " +computerWins;
            } 
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel);  
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}
/* Click Folded Paper Button**************************************************************************************************************** */
function clickFoldedPaperButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "paper" || "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);  
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;      
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "paper" || "scissors" || "jagged rock"){
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;       
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " +  computerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks15[number] + "! " + playerWins;        
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks15[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;        
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " +  roundTie;
        }
        else if (computerAttacks25[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;        
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        }
        else if (computerAttacks30[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;        
        } else {    
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " +  roundTie;
        }
        else if (computerAttacks35[number] === "paper" || "scissors" || "jagged rock" || "wet rock" || "air scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " +  playerWins;        
        } else {    
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + computerWins;
        }
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel);  
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}
/* Click Scissors Paper Button**************************************************************************************************************** */
function clickScissorsButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "scissors"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks5[number] + "! " + roundTie;
        } else if (computerAttacks5[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " +  playerWins;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks10[number] + "! " + roundTie;
    } else if (computerAttacks10[number] === "paper") {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks10[number] + "! " + playerWins;
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks10[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks15[number] + "! " + roundTie;
    } else if (computerAttacks15[number] === "paper") {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks15[number] + "! " + playerWins;
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks20[number] + "! " + roundTie;
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " +  playerWins;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " +  computerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks25[number] + "! " + roundTie;
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " +  playerWins;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks25[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks30[number] + "! " + roundTie;
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks30[number] + "! " + playerWins;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " +  computerWins;
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } else if (computerAttacks35[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks35[number] + "! " + computerWins;
        }
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel); 
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;

}
/* Click Titanium Scissors Paper Button**************************************************************************************************************** */
function clickTitaniumScissorsButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "titanium scissors" || "paper" || "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        }

    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "titanium scissors" || "paper" || "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks10[number] + "! " + playerWins;
    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " +  computerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "titanium scissors" || "paper" || "scissors"){
        storedComputerPoints +=10;
        storedPlayerPoints +=25;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " +  playerWins;
} else {
    storedComputerLevel +=25;
    storedPlayerPoints +=10;
    console.log(computerWins);
    document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks15[number] + "! " +  computerWins;
}
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;

    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
        document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks20[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + playerWins;
    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
    } else if (computerAttacks30[number] === "titanium scissors") {
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
    }
    else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
        document.getElementById("results").innerHTML ="Computer chose " + computerAttacks30[number] + "! " + computerWins;
    }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks30[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
    } else if (computerAttacks30[number] === "titanium scissors") {
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + roundTie;
    }
    else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + computerWins;
    }
    }
    checkLevel();
    console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel);
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}
/* Click Air Scissors Paper Button**************************************************************************************************************** */
function clickAirScissorsButton(){
    if (storedComputerLevel <= 5) {
        number = Math.floor(Math.random()*computerAttacks5.length)+0;
        if (computerAttacks5[number] === "rock" || "scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + playerWins;
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks5[number] + "! " + computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "rock" || "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints +=10;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + playerWins;
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints+= 25;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks10[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
        storedPlayerPoints += 25;
        storedComputerPoints +=10;
        console.log(playerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + playerWins;
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints+= 25;
        console.log(computerWins);
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks15[number] + "! " + computerWins;
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " + playerWins;
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks20[number] + "! " +   computerWins;
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
            storedPlayerPoints += 25;
            computerPlayerPoints +=10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks25[number] + "! " +   playerWins;
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins); 
            document.getElementById("results").innerHTML ="Computer chose " + computerAttacks25[number] + "! " +   computerWins;
        }     
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock" || "scissors" || "jagged rock" || "wet rock" || "titanium scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            console.log(playerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " + playerWins;
            
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks30[number] + "! " +  computerWins;
        } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock" || "scissors" || "jagged rock" || "wet rock" || "titanium scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
        } else if (computerAttacks35[number] === "air scissors"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            document.getElementById("results").innerHTML =  "Computer chose " + computerAttacks35[number] + "! " + roundTie;
        } 
        else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + computerWins;
        }
    }
    checkLevel();
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}
/* Click Diamond Button**************************************************************************************************************** */
function clickDiamondButton(){
    number = Math.floor(Math.random()*computerAttacks35.length)+0;
    if (computerAttacks35[number] === "air scissors"){
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + computerWins;
            
    } else {
        storedComputerPoints+=10;
        storedPlayerPoints +=25;
        document.getElementById("results").innerHTML = "Computer chose " + computerAttacks35[number] + "! " + playerWins;
    }

    checkLevel();
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}