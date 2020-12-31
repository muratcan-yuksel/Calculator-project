
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
//get the clear button
let clearButton = document.getElementById("clear");


//get the display part
let display = document.getElementById("display");
//numbers are displayed
let digits = document.querySelectorAll(".digits");
for (let i= 0; i< digits.length; i++){
   digits[i].addEventListener("click", function(e) {
       let displayValue= display.textContent+= e.target.textContent;
       sessionStorage.setItem("chainNumber", display.textContent);
   console.log (displayValue);
  
   });
}

//clear button listener
clearButton.addEventListener("click", function (e){
   sessionStorage.removeItem("dispNumber");
    console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
    sessionStorage.removeItem("operator");
    console.log( "operator" +  sessionStorage.getItem("operator"));
     sessionStorage.removeItem("chainNumber");
    console.log("chainNo" + sessionStorage.getItem("chainNumber"));
})

//subtraction button listener
subtractionButton.addEventListener("click", function (e){
       sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "-");
    //empty display area
 display.textContent="";
 
 
 })
 
//addition button listener
additionButton.addEventListener("click", function (e){
    
    sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "+");
    //empty display area
 display.textContent="";
  })

//multiplication event listener
multiplicationButton.addEventListener("click", function (e){
   
    sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "*");
    //empty display area
 display.textContent=""; 
 })

//division event listener
divisionButton.addEventListener("click", function (e){
    let y= sessionStorage.getItem("dispNumber");
    console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
    let x = sessionStorage.getItem("operator");
    console.log( "operator" +  sessionStorage.getItem("operator"));
    let z = sessionStorage.getItem("chainNumber");
    console.log("chainNo" + sessionStorage.getItem("chainNumber"));
    operate (x,y,z);
    console.log (operate(x,y,z));
    display.textContent = operate(x,y,z);
    
    sessionStorage.setItem("dispNumber", display.textContent);
    //set the operator for the operate function to take on
   sessionStorage.setItem("operator", "/");
    //empty display area
 display.textContent="";
 })

//equals event listener
let equalsTo= document.getElementById("equals");
//makes a subtraction of the two given numbers
equalsTo.addEventListener("click", function(e){
 //shorten the parameters
let x = sessionStorage.getItem("operator");
let y= sessionStorage.getItem("dispNumber");
let z = display.textContent;
//console.log(  y - z);
console.log (x);
operate(x,y,z);
display.textContent= (operate(x,y,z));
//sessionStorage.setItem("dispNumber", (operate(x,y,z)));
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


 














