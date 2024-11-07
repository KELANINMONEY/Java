//Admission criteria task: write a program that checks if a student qualifies for admission. the criteria are : the student must have a score of 70 and above.
//The student must either be involved in sport or have a high recommendaton.

let Qualification = prompt("pls what's your admission score --> ")
let highrec = prompt("ARE YOU INVOLVED IN SPORT OR HAVE A HIGH RECOMMENDATION(YES/NO) --> ")
console; 
if (Qualification >= 70 && highrec == "yes"){
    console = "Congratulations, You are QUALIFIED"
}
else {
    console = "So sorry, You are not qualified🥺"
}
document.getElementById("result2").innerHTML = "QUALIFICATION: " + console;