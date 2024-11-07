let day = parseInt(prompt("Enter the day number (1-7): "))
let dayName;
if (day === 1){
    dayName = "Sunday";
}
else if (day === 2){
    dayName = "Monday";
}
else if (day === 3){
    dayName = "Tuesday";
}
else if (day === 4){
    dayName = "Wednesday";
}
else if (day === 5){
    dayName = "Thursday";
}
else if (day === 6){
    dayName = "Friday";
}
else if (day === 7){
    dayName = "Saturday";
}
else {
    dayName = "Invalid day Number"
}
document.getElementById("result").innerHTML = "Days Of The Week: " + dayName;