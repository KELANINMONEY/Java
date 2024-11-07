//Write a program that ask the users to enter a password and check its strength: If the password is 8 characters or more and contains the word "secure", print "Strong Password."
//If the password is 8 characters or more but doesnt contain "secure", print medium strength password if the password does not contain 8 characters print weak password.

let Password = prompt("Enter your password--> ")
let condition;

if (Password.length >= 8 && Password.toLowerCase().includes ("secure")){
    condition = "STRONG PASSWORD"
}
else if (Password.length >= 8 && Password.toLowerCase() != "Secure"){
   condition = "MEDIUM STRONG PASSWORD"
} 
else{
    condition = "WEAK PASSWORD"
}

document.getElementById("result3").innerHTML = "Password: " + condition;