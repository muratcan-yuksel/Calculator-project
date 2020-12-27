document.addEventListener("DOMContentLoaded", function(){
// 4 basic operation functions
let addition = function (x, y){
return x + y;
}
let subtraction = function (x, y) {
    return x - y;
}
let multiplication = function (x,y) {
    return x * y;
}
let division = function (x,y){
    return x / y;
}
// a function that calls the operation functions 
let operate = function (x,y,z) {
if (x == "+") {
   return addition(y,z);
} else if ( x== "-"){
    return subtraction(y,z);
}else if (x== "*"){
    return multiplication(y,z);
}else if (x=="/"){
    return division(y,z);
}

}

//get the display part
let display = document.getElementById("display");
//numbers are displayed
let digits = document.querySelectorAll(".digits");
for (let i= 0; i< digits.length; i++){
   digits[i].addEventListener("click", function(e) {
  let displayValue= display.textContent+= e.target.textContent;
   console.log (displayValue);
   
   });
}

//get the operation buttons
let addition = document.getElementsByClassName("addition");
let subtraction = document.getElementsByClassName("subtraction");
let multiplication = document.getElementsByClassName("multiplication");
let division = document.getElementsByClassName("division");










/*
document.getElementById("one").addEventListener("click", function(e){

    let displayValue= display.textContent+= e.target.textContent;
    console.log (displayValue);

})
document.getElementById("two").addEventListener("click", function(e){

    let displayValue= display.textContent+= e.target.textContent;
    console.log (displayValue);

})
*/





















});