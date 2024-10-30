const prompt = require("prompt-sync")()
let age = prompt("How old are you --> ")
if (age <= 12) {
    console.log("You are a child 🧒")
}
else if( age <=17) {
    console.log("you are a Teenager 🧑🧑")
}
else if ( age <=49) {
    console.log("You are an Adult 👴")
}
else {
    console.log("You are an Elder 👴👴")
}