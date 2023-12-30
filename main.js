#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var maxValue = 10;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
var status = false;
while (!status) {
    var userInput = prompt("Gusse a number between 1 and " + maxValue + " ");
    userInput = Number(userInput);
    if (userInput === randomNumber) {
        status = true;
        console.log("YOu won! The number was" + randomNumber);
    }
    else if (userInput > randomNumber) {
        console.log("sorry your guess was too high.");
    }
    else {
        console.log("sorry, your guess was too low");
    }
}
;
