#!/usr/bin/env node
export{}
var prompt = require('prompt-sync')();
const maxValue = 10;
const randomNumber = Math.floor(Math.random()*maxValue)+1;
let status = false;

while(!status){
    var userInput = prompt("Gusse a number between 1 and " + maxValue + " ")
    userInput = Number(userInput);
    if (userInput === randomNumber){
        status = true;
        console.log("YOu won! The number was" + randomNumber);
    }else if(userInput > randomNumber){
        console.log("sorry your guess was too high.");
    }else{
        console.log("sorry, your guess was too low");   
    }
};

