let user = prompt("Are you a student(yes/no): ")
let age = prompt("How old are you: ")
let originalamount = prompt("Enter the principal amount here --> ")
let years = prompt("Enter the total year ")
let discounts;

if (user ==="yes" || age >= 60){
    const discount = (originalamount * 0.05);
    const discountoriginalamount = originalamount - discount;
    discounts = "you are quaified but this app is under progress"
}
else if (user ==="no" || age <=59){
    const discount = (originalamount * 0.10);
    const discountoriginalamount = originalamount - discount;
    discounts = "this app is still under progress"
}

document.getElementById("result6").innerHTML = "rate: " + discounts;