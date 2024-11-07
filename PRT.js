let input1 = parseInt(prompt("Enter first input here --> "))
let input2 = parseInt(prompt("Enter second input here --> "))
let result;
if (input1 >=1 && input2 >=1){
    result = "BOTH ARE POSITIVE"
}
else if (input1 <=-1 && input2 <=-1){
    result = "BOTH ARE NEGATIVE"
}
else if (input1 == 0 && input2 == 0){
   result = "BOTH ARE ZERO"
}
else if (input1 <=-1 || input2 <=-1){
  result = "AT LEAST ONE OF THEM IS NEGATIVE"
}
else {
    result = "INVALID!!!"
}

document.getElementById("result7").innerHTML = "INPUT: " + result;