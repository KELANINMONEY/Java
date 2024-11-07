//ask if the user is a student and their age. ask for the original price of an item.
let Users = prompt("Are you a student (yes/no): ")
let age = prompt("Enter your age: ")
let price = parseInt(prompt("Enter the price here --> "))
let discounts;
if (Users ==="yes" || age >= 60){
    const discount = (price * 0.10);
    const discountprice = price - discount;
    discounts = "YOU ARE QUALIFIED FOR A DISCOUNT"
}
else{
    discounts = "YOU ARE NOT QUALIFIED FOR A DISCOUNT"
}

document.getElementById("result5").innerHTML = "discount: " + discounts;