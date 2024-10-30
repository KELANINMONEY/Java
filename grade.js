const prompt = require("prompt-sync")()
let grade = prompt("What's your score --> ")
if (grade <60) {
    console.log("You are in Grade F")
}
else if (grade <= 69) {
    console.log("You are in Grade D")
}
else if (grade <= 79) {
    console.log("You are in Grade C")
}
else if (grade <= 89) {
    console.log("You are in Grade B")
}
else if (grade ==90<=100) {
    console.log("You are in Grade A")
}
else {
    console.log("Error??, Please try again🥺")
}