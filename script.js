
// 4 basic operation functions
let addition = function (x, y){
 //parseInt so that it won't chain but add them up
return parseInt(x) + parseInt (y);
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


//get the operation buttons
let additionButton = document.getElementById("addition");
let subtractionButton = document.getElementById("subtraction");
let multiplicationButton = document.getElementById("multiplication");
let divisionButton = document.getElementById("division");



//get the display part
let display = document.getElementById("display");
//numbers are displayed
let digits = document.querySelectorAll(".digits");
for (let i= 0; i< digits.length; i++){
   digits[i].addEventListener("click", function(e) {
       let displayValue= display.textContent+= e.target.textContent;
       localStorage.setItem("chainNumber", displayValue);
   console.log (displayValue);
  
   });
}
//subtraction button listener
subtractionButton.addEventListener("click", function (e){
       localStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   localStorage.setItem("operator", "-");
    //empty display area
 display.textContent="";
 
 
 })
 
//addition button listener
additionButton.addEventListener("click", function (e){
    localStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   localStorage.setItem("operator", "+");
    //empty display area
 display.textContent="";
  })

//multiplication event listener
multiplicationButton.addEventListener("click", function (e){
    localStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   localStorage.setItem("operator", "*");
    //empty display area
 display.textContent=""; 
 })

//division event listener
divisionButton.addEventListener("click", function (e){
    let y= localStorage.getItem("dispNumber");
    console.log(localStorage.getItem("dispNumber"));
    let x = localStorage.getItem("operator");
    console.log( localStorage.getItem("operator"));
    let z = localStorage.getItem("chainNumber");
    console.log(localStorage.getItem("chainNumber"));
    localStorage.setItem("dispNumber", display.textContent);
    //set the operator for the operate function to take on
   localStorage.setItem("operator", "/");
    //empty display area
 display.textContent="";
 })

//equals event listener
let equalsTo= document.getElementById("equals");
//makes a subtraction of the two given numbers
equalsTo.addEventListener("click", function(e){
 //shorten the parameters
let x = localStorage.getItem("operator");
let y= localStorage.getItem("dispNumber");
let z = display.textContent;
//console.log(  y - z);
console.log (x);
operate(x,y,z);
display.textContent= (operate(x,y,z));
//localStorage.setItem("dispNumber", (operate(x,y,z)));
})

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

    let operate2 = function (x,y,z) {
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


 














