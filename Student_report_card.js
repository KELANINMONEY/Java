const prompt = require("prompt-sync")()
let maths = parseFloat(prompt("Enter your math score--> "))
let english = parseFloat(prompt("Enter your english score--> "))
let art = parseFloat(prompt("Enter your art score--> "))
let science = parseFloat(prompt("Enter your science score--> "))

let average = parseFloat(maths + english + art + science)/ 4

if ( average <= 60){
    console.log("Grade F, Unfortunately you did not pass. Try harder next time.")
}
else if (average <= 69){
    console.log("Grade D, Unfortunately you did not pass. Try harder next time.")
}
else if (average <= 79){
    console.log("Grade C, Congratulations!, You passed, would you like to join an activity")
}
else if (average <= 89){
    console.log("Grade B, Congratulations!, You passed, would you like to join an activity")
}
else if (average <= 100){
    console.log("Grade A, Distinction, You are a star, would you like to join an activity")
}
else{
    console.log("Invalid!!! Score")
}


let response = prompt("Do you want to proceed? (yes/no): ")
let activities = ("1.Sports 2. Music 3. Drama 4. Debate 5. Art club 6. Science club")
if (response === "yes" && average >=70 ){
    console.log (activities)
}
else if (response === "yes" && average <=69 ){
    console.log("You failed, you are not eligible for the activities")
}
else {
    console.log("Invalid!!!")
}
let act = prompt("Press (1-6) to select your desired activities. ")
if (act == "1"){
    console.log("You are now a participant of the Sport club.")
}
else if (act== "2"){
    console.log("You are now a participant of the Music club.")
}
else if (act == "3"){
    console.log("You are now a participant of the Drama club.")
}
else if (act == "4"){
    console.log("You are now a participant of the Debate club.")
}
else if (act == "5"){
    console.log("You are now a participant of the art club.")
}
else if (act == "6"){
    console.log("You are now a participant of the Science club.")
}
else {
    console.log ("Invalid!!!")
}