
// 4 basic operation functions
let addition = function (x, y){
    //parseFloat turns the string into numbers so that it won't concat
 return +(Math.round((parseFloat(x) + parseFloat(y)) + "e+2")  + "e-2");

}
//following math round rounds the long decimal numbers
let subtraction = function (x, y) {
    return +(Math.round((x - y) + "e+2")  + "e-2");
}
let multiplication = function (x,y) {
    return +(Math.round((x * y) + "e+2")  + "e-2");
}
let division = function (x,y){
          return +(Math.round((x / y) + "e+2")  + "e-2");
   
}
// a function that calls the operation functions 
let operate = function (x,y,z) {
    if (x == "+") {
       return addition(y,z);
    } else if ( x== "-"){
        return subtraction(y,z);
    }else if (x== "*"){
        return multiplication(y,z);
    }else if (x=="/" && z== 0){ //snarky error mesage for divided by zero
        return display.textContent="Nope";
    }else if (x=="/"){
        return division(y,z);
        
    }
    }



//get the operation buttons
let additionButton = document.getElementById("addition");
let subtractionButton = document.getElementById("subtraction");
let multiplicationButton = document.getElementById("multiplication");
let divisionButton = document.getElementById("division");
//get the clear button
let clearButton = document.getElementById("clear");
//get the floating numbers button
let floatButton = document.getElementById("float");


//get the display part
let display = document.getElementById("display");
//numbers are displayed
let digits = document.querySelectorAll(".digits");
for (let i= 0; i< digits.length; i++){
   digits[i].addEventListener("click", function(e) {
       //fixes the Nope123124 etc. issue
       if (display.textContent=="Nope" || display.textContent == 0){
           return display.textContent="" + e.target.textContent;
       }else {
       let displayValue= display.textContent+= e.target.textContent;
       sessionStorage.setItem("chainNumber", display.textContent);
   console.log (displayValue);}
  
   });
}

//clear button listener
clearButton.addEventListener("click", function (e){
   sessionStorage.removeItem("dispNumber");
   sessionStorage.removeItem("operator");
   sessionStorage.removeItem("chainNumber");
    console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
    
    console.log( "operator" +  sessionStorage.getItem("operator"));
    
    console.log("chainNo" + sessionStorage.getItem("chainNumber"));

    display.textContent = "";
})

//subtraction button listener
subtractionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null  ) {
        let y= sessionStorage.getItem("dispNumber");
        console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
        let x = sessionStorage.getItem("operator");
        console.log( "operator" +  sessionStorage.getItem("operator"));
        let z = sessionStorage.getItem("chainNumber");
        console.log("chainNo" + sessionStorage.getItem("chainNumber"));
        operate (x,y,z);
        console.log (operate(x,y,z));
        display.textContent = operate(x,y,z);
    }
    
       sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "-");
    //empty display area
 display.textContent="";
 
 
 })
 
//addition button listener
additionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null  ) {
        let y= sessionStorage.getItem("dispNumber");
        console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
        let x = sessionStorage.getItem("operator");
        console.log( "operator" +  sessionStorage.getItem("operator"));
        let z = sessionStorage.getItem("chainNumber");
        console.log("chainNo" + sessionStorage.getItem("chainNumber"));
        operate (x,y,z);
        console.log (operate(x,y,z));
        display.textContent = operate(x,y,z);
    }
    
    sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "+");
    //empty display area
 display.textContent="";
  })

//multiplication event listener
multiplicationButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null  ) {
        let y= sessionStorage.getItem("dispNumber");
        console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
        let x = sessionStorage.getItem("operator");
        console.log( "operator" +  sessionStorage.getItem("operator"));
        let z = sessionStorage.getItem("chainNumber");
        console.log("chainNo" + sessionStorage.getItem("chainNumber"));
        operate (x,y,z);
        console.log (operate(x,y,z));
        display.textContent = operate(x,y,z);
    }
    
     sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
     sessionStorage.setItem("operator", "*");
    //empty display area
     display.textContent=""; 
 })

//division event listener
divisionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null  ) {
        let y= sessionStorage.getItem("dispNumber");
        console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
        let x = sessionStorage.getItem("operator");
        console.log( "operator" +  sessionStorage.getItem("operator"));
        let z = sessionStorage.getItem("chainNumber");
        console.log("chainNo" + sessionStorage.getItem("chainNumber"));
        operate (x,y,z);
        console.log (operate(x,y,z));
        display.textContent = operate(x,y,z);
    }

    sessionStorage.setItem("dispNumber", display.textContent);
    //set the operator for the operate function to take on
   sessionStorage.setItem("operator", "/");
    //empty display area
 display.textContent="";
 })

 floatButton.addEventListener("click", function(e){
     let element= document.getElementById("float");
     element.id= float1;
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
sessionStorage.removeItem("dispNumber");
   sessionStorage.removeItem("operator");
   sessionStorage.removeItem("chainNumber");
   
//sessionStorage.setItem("dispNumber", (operate(x,y,z)));
})


   


