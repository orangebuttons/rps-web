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
    alert("A message of gratitude and a to-do list for better quality of life will be given to the player. The only option will be to restart the game.")
    }
    storedComputerLevel = Math.floor(storedComputerPoints / 100) + 1;
    if (storedComputerLevel > 1000 ){
        alert("Retry")
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
            document.getElementById("results").innerHTML = roundTie;
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = computerWins;
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
            document.getElementById("results").innerHTML = roundTie;
        } else if (computerAttacks10[number] === "scissors") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
            document.getElementById("results").innerHTML = playerWins;
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
            document.getElementById("results").innerHTML = computerWins;
        }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else if (computerAttacks15[number] === "scissors") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } 
        else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if(computerAttacks25[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);            
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
        }       
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if(computerAttacks30[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);            
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks30[number] === "rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if(computerAttacks30[number] === "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);            
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints+=10;
            console.log(computerWins);
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
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks10[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks10[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else {
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } 
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
        }
        
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
        }       
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);}
            else if (computerAttacks30[number] === "titanium scissors") {
                storedComputerPoints +=10;
                storedPlayerPoints +=25;
                console.log(playerWins);            
            }
         else if (computerAttacks30[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
        } 
        
    } 
    else if(storedComputerLevel >= 30 && storedComputerLevel <= 35) {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks35[number] === "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        } else if (computerAttacks35[number] === "paper") {
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
        }  else if (computerAttacks35[number] === "jagged rock"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie);
        } else {
            storedComputerPoints +=25;
            storedPlayerPoints +=10;
            console.log(computerWins);
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
        } else if (computerAttacks5[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        }

    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
        number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks10[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks10[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks10[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
        number = Math.floor(Math.random()*computerAttacks15.length)+0;
        if (computerAttacks15[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks15[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        } else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks20[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        } else if(computerAttacks20[number] === "wadded paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks25[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        } else if(computerAttacks25[number] === "wadded paper" || "folded paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        }      
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks30[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        } else if(computerAttacks30[number] === "wadded paper" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } 
        else {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks35[number] === "paper"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks35[number] === "scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else if (computerAttacks35[number] === "jagged rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins); 
        } else if(computerAttacks35[number] === "wadded paper" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } 
        else if (computerAttacks35[number] === "wet rock") {
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
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
            console.log(roundTie)
        } else if (computerAttacks5[number] === "scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins)
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "paper"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    } else if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins)
    } else {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "paper"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    } else if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins)
    } else {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins)
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks25[number] === "scissors" || "jagged rock" || "folded paper"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins)
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins)
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "paper"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks35[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins)
        } else {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
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
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints += 25;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints += 10;
        console.log(playerWins);
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints += 25;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints += 10;
        console.log(playerWins);
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints += 25;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
       if (computerAttacks20[number] === "wadded paper"){
        storedPlayerPoints += 5;
        storedComputerPoints +=5;
        console.log(roundTie);
       }
        else if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedPlayerPoints += 25;
            storedComputerPoints += 10;
            console.log(playerWins);
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints += 25;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
           }
            else if (computerAttacks25[number] === "scissors" || "jagged rock" || "folded paper"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
            }     
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
           }
            else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
            } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks30[number] === "wadded paper"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            console.log(roundTie);
           }
            else if (computerAttacks30[number] === "scissors" || "jagged rock" || "folded paper" || "titanium scissors"){
                storedPlayerPoints += 25;
                storedComputerPoints += 10;
                console.log(playerWins);
            } else {
                storedPlayerPoints += 10;
                storedComputerPoints += 25;
                console.log(computerWins);
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
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "paper" || "scissors" || "jagged rock"){
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);        
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);        
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);        
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie)
        }
        else if (computerAttacks25[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);        
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie)
        }
        else if (computerAttacks30[number] === "paper" || "scissors" || "jagged rock" || "wet rock"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);        
        } else {    
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "folded paper"){
            storedComputerPoints +=5;
            storedPlayerPoints +=5;
            console.log(roundTie)
        }
        else if (computerAttacks35[number] === "paper" || "scissors" || "jagged rock" || "wet rock" || "air scissors"){
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);        
        } else {    
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
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
            console.log(roundTie)
        } else if (computerAttacks5[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    } else if (computerAttacks10[number] === "paper") {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "scissors" || "jagged rock"){
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    } else if (computerAttacks15[number] === "paper") {
        storedComputerPoints += 10;
        storedPlayerPoints += 25;
        console.log(playerWins);
    } else {
        storedComputerPoints += 25;
        storedPlayerPoints += 10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks20[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks25[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks30[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
        }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "scissors" || "jagged rock"){
            storedComputerPoints += 5;
            storedPlayerPoints += 5;
            console.log(roundTie)
        } else if (computerAttacks35[number] === "paper") {
            storedComputerPoints += 10;
            storedPlayerPoints += 25;
            console.log(playerWins);
        } else {
            storedComputerPoints += 25;
            storedPlayerPoints += 10;
            console.log(computerWins);
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
        }

    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
        if (computerAttacks10[number] === "titanium scissors" || "paper" || "scissors"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "titanium scissors" || "paper" || "scissors"){
        storedComputerPoints +=10;
        storedPlayerPoints +=25;
        console.log(playerWins);
} else {
    storedComputerLevel +=25;
    storedPlayerPoints +=10;
    console.log(computerWins);
}
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
    } else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
    } else if (computerAttacks30[number] === "titanium scissors") {
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    }
    else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
    }
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks30[number] === "titanium scissors" || "paper" || "scissors" || "wadded paper" || "folded paper"){
            storedComputerPoints +=10;
            storedPlayerPoints +=25;
            console.log(playerWins);
    } else if (computerAttacks30[number] === "titanium scissors") {
        storedComputerPoints += 5;
        storedPlayerPoints += 5;
        console.log(roundTie)
    }
    else {
        storedComputerLevel +=25;
        storedPlayerPoints +=10;
        console.log(computerWins);
    }
    }
    checkLevel();
    /*console.log("player points " + storedPlayerPoints);
    console.log("computer points " + storedComputerPoints);
    console.log("computer level " + storedComputerLevel);
    console.log("player level " + storedPlayerLevel); */
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
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >= 5 && storedComputerLevel <= 10 ){
	number = Math.floor(Math.random()*computerAttacks10.length)+0;
    if (computerAttacks10[number] === "rock" || "scissors" || "jagged rock"){
        storedPlayerPoints += 25;
        storedComputerPoints +=10;
        console.log(playerWins);
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints+= 25;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >= 10 && storedComputerLevel <= 15){
	number = Math.floor(Math.random()*computerAttacks15.length)+0;
    if (computerAttacks15[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
        storedPlayerPoints += 25;
        storedComputerPoints +=10;
        console.log(playerWins);
    } else {
        storedPlayerPoints += 10;
        storedComputerPoints+= 25;
        console.log(computerWins);
    }
    }
    else if (storedComputerLevel >=15 && storedComputerLevel <=20){
        number = Math.floor(Math.random()*computerAttacks20.length)+0;
        if (computerAttacks20[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            console.log(playerWins);
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
        }
    }
    else if (storedComputerLevel >=20 && storedComputerLevel<= 25){
        number = Math.floor(Math.random()*computerAttacks25.length)+0;
        if (computerAttacks25[number] === "rock" || "scissors" || "jagged rock" || "wet rock"){
            storedPlayerPoints += 25;
            computerPlayerPoints +=10;
            console.log(playerWins);
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            console.log(computerWins);
        }     
    }
    else if (storedComputerLevel >= 25 && storedComputerLevel <= 30) {
        number = Math.floor(Math.random()*computerAttacks30.length)+0;
        if (computerAttacks30[number] === "rock" || "scissors" || "jagged rock" || "wet rock" || "titanium scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            //console.log(playerWins);
            
        } else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            //console.log(computerWins);
            document.getElementById("results").innerHTML = computerWins;
        } 
    }
    else {
        number = Math.floor(Math.random()*computerAttacks35.length)+0;
        if (computerAttacks35[number] === "rock" || "scissors" || "jagged rock" || "wet rock" || "titanium scissors"){
            storedPlayerPoints += 25;
            storedComputerPoints +=10;
            document.getElementById("results").innerHTML = playerWins;
        } else if (computerAttacks35[number] === "air scissors"){
            storedPlayerPoints += 5;
            storedComputerPoints +=5;
            document.getElementById("results").innerHTML = roundTie;
        } 
        else {
            storedPlayerPoints += 10;
            storedComputerPoints+= 25;
            document.getElementById("results").innerHTML = computerWins;
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
            storedComputerPoints += 10;
            storedPlayerPoints +-25;
            document.getElementById("results").innerHTML = computerWins;
            
    } else {
        storedComputerPoints+=25;
        storedPlayerPoints +=10;
        document.getElementById("results").innerHTML = playerWins;
    }

        checkLevel();
    document.getElementById("computerPoints").innerHTML = storedComputerPoints;
    document.getElementById("playerPoints").innerHTML = storedPlayerPoints;
    document.getElementById("computerLevel").innerHTML = storedComputerLevel;
    document.getElementById("playerLevel").innerHTML = storedPlayerLevel;
}