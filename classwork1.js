// write a program that ask the user to enter the day of the week and checks if it's a weekday or weekend. Use and & or logic to determine the answer.
let day = prompt("Enter the day of the week; ")
let week;

if (day =="Saturday" || day == "Sunday") {
    week = "IT'S A WEEKEND, HAVE A NICE WEEKEND"
}
else if (day == "Monday" || day == "Tuesday" || day =="Wednesday" || day =="Thursday" || day =="Friday"){
    week = "IT'S A WEEK DAY, WORK HARD"
}
else {
    console.log("INVALID!! ENTER THE CORRECT DAYS OF THE WEEK")
}

document.getElementById("result1").innerHTML = "WEEKEND OR WEEKDAY: " + week;