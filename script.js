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
   digits[i].onclick = function(e){
   display.textContent= e.target.textContent;
   }
}























});