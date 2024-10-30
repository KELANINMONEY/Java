const prompt = require("prompt-sync")()
let age = prompt("How old are you --> ")
if (age >= 18){
    console.log("You are eligible to vote 👍")
}
else {
    console.log("You are not eligible to vote 🥺")
}