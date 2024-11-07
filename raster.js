const prompt = require("prompt-sync")()
//BETTING ACCOUNT.

let age = prompt("How Old Are You -->: ")
let balance = prompt("How much do you have in your account? --> : ")
let nationality = prompt("What country are you from (Please note that this should be written as capital letter only) --> ")

if (age >= 18 && balance >= 10 && nationality == "NIGERIA"){
    console.log("QUALIFIED")
}
else{
    console.log("NOT QUALIFIED")
}