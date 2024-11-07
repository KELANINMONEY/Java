let monthlyincome = parseFloat(prompt("Enter the amount of your monthly Income? --> "))
let totalexpenses = parseFloat(prompt("How much do you spend as expenses --> "))
let monthlysavings = parseFloat(monthlyincome - totalexpenses)
let savings;
if (monthlysavings >= monthlyincome * 0.2){
    savings = "GOAL ACHIEVED"
}
else {
    savings = "PLEASE LIMIT YOUR EXPENSES, TO GET ENOUGH SAVINGS"
}

document.getElementById("result4").innerHTML = "monthlysavings: " + savings;