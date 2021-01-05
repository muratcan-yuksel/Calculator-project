//so that refreshing page would delete everything
sessionStorage.removeItem("dispNumber");
   sessionStorage.removeItem("operator");
   sessionStorage.removeItem("chainNumber");

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
      if (x == "+" ) {
       return addition(y,z);
    } else if ( x== "-"){
        return subtraction(y,z);
    }else if (x == "*" && y == "-"){
        y=1;
        return multiplication(y,z);
    }
    else if (x== "*" ){
        return multiplication(y,z);
    }
    else if (x=="/" && z== 0){ //snarky error mesage for divided by zero
        return display.textContent="Nope";
    }else if (x=="/"){
        return division(y,z);
    }else if (x == null) {
        return z;
    }
    }

//get the operation buttons
const additionButton = document.getElementById("addition");
const subtractionButton = document.getElementById("subtraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
//get the clear button
const clearButton = document.getElementById("clear");
//get the floating numbers button
const floatButton = document.getElementById("float");
//get the backspace button
const deleteButton = document.getElementById("backspace");

//get the display part
let display = document.getElementById("display");
//numbers are displayed
let digits = document.querySelectorAll(".digits");
for (let i= 0; i< digits.length; i++){
       digits[i].addEventListener("click", function(e) {
        //enable operation buttons
    additionButton.disabled = false; 
    subtractionButton.disabled=false;
    multiplicationButton.disabled=false;
    divisionButton.disabled=false;
     //enable equalsTo after a number is given
     equalsTo.disabled=false;
      
       //fixes the Nope123124 etc. issue
       if (display.textContent==="Nope" || display.textContent === 0 || clicked ==true ){
           //enable the floatButton
        floatButton.disabled=false;
        //disable the floatButton
        clicked = false;   
        
         display.textContent="" + e.target.textContent;
        console.log(display.textContent);
        sessionStorage.setItem("chainNumber", display.textContent);
    } else   {
       let displayValue= display.textContent+= e.target.textContent;
      // console.log(display.textContent);
       sessionStorage.setItem("chainNumber", display.textContent);

   console.log (displayValue);
   }
  
   });
}
deleteCheck= false;
//delete button event listener
deleteButton.addEventListener("click", function(e){
   let backSpaceDisplay= display.textContent;
    let arr = backSpaceDisplay.split("");
    console.log(arr);
    let deletes= arr.pop();
    console.log(arr);
    let str= arr.join("");
     console.log(str);
    display.textContent=str;
    str = sessionStorage.setItem("dispNumber", display.textContent);
    deleteCheck= true;
    //can't operate if the disp text is empty
    if (display.textContent === ""){
        equalsTo.disabled=true;
    }
})

if ( deleteCheck=== true && sessionStorage.getItem("dispNumber")===""){
    equalsTo.disabled=true;
}

//clear button listener
clearButton.addEventListener("click", function (e){
   sessionStorage.removeItem("dispNumber");
   sessionStorage.removeItem("operator");
   sessionStorage.removeItem("chainNumber");
    console.log("dispnumber" + sessionStorage.getItem("dispNumber"));
    
    console.log( "operator" +  sessionStorage.getItem("operator"));
    
    console.log("chainNo" + sessionStorage.getItem("chainNumber"));
//enable the float button
floatButton.disabled=false;
//disable operation buttons after clear button
additionButton.disabled=true;
subtractionButton.disabled=true;
multiplicationButton.disabled=true;
divisionButton.disabled=true;

    display.textContent = "";
})





//subtraction button listener
subtractionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null && display.textContent!==""   ) {
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
    //enable the float button
    floatButton.disabled=false;
//disable equals button (will enable it after pressing a digit)
//actually this subtraction button works perfectly, but I'm gonna disable it too bcs the other's are fucked up
equalsTo.disabled=true;
       sessionStorage.setItem("dispNumber", display.textContent);
       console.log("display number " + sessionStorage.getItem("dispNumber"))
    //se the operator for the operate function to take
   sessionStorage.setItem("operator", "-");
   console.log( "operator " +  sessionStorage.getItem("operator"));
    //empty display area
 display.textContent="";
 
 })
 
//addition button listener
additionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null && sessionStorage.getItem("dispNumber")!==""  ) {
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
    //enable the float button
    floatButton.disabled=false;
//disable equals button (will enable it after pressing a digit)
equalsTo.disabled=true;
    sessionStorage.setItem("dispNumber", display.textContent);
    //set the operator for the operate function to take
   sessionStorage.setItem("operator", "+");
   console.log("display number " + sessionStorage.getItem("dispNumber"))
 console.log( "operator " +  sessionStorage.getItem("operator"));
    //empty display area
 display.textContent="";
  })

//multiplication event listener
multiplicationButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null && sessionStorage.getItem("dispNumber")!==""      ) {
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
    //enable the float button
    floatButton.disabled=false;
      //disable equals button (will enable it after pressing a digit)
equalsTo.disabled=true;
     sessionStorage.setItem("dispNumber", display.textContent);
    //se the operator for the operate function to take
     sessionStorage.setItem("operator", "*");
     console.log("display number " + sessionStorage.getItem("dispNumber"))
 console.log( "operator " +  sessionStorage.getItem("operator"));
    //empty display area
     display.textContent=""; 
 })

//division event listener
divisionButton.addEventListener("click", function (e){
    //do the following only if it's a fresh start
    if (sessionStorage.getItem("dispNumber")!== null && sessionStorage.getItem("operator") !== null && sessionStorage.getItem("chainNumber")!==null && sessionStorage.getItem("dispNumber")!==""    ) {
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
//enable the float button
floatButton.disabled=false;
  //disable equals button (will enable it after pressing a digit)
  equalsTo.disabled=true;
sessionStorage.setItem("dispNumber", display.textContent);
    
    //set the operator for the operate function to take on
   sessionStorage.setItem("operator", "/");
   console.log("display number " + sessionStorage.getItem("dispNumber"))
   console.log( "operator " +  sessionStorage.getItem("operator"));
    
    //empty display area
 display.textContent="";
 })
//fire float button, disable it once clicked
floatButton.addEventListener("click", function(e){
    display.textContent+= (e.target.textContent) + "";
   /*let element= document.getElementById("float");
   element.remove();*/
floatButton.disabled=true;
   console.log("hello");

 })

//this will help solving the issue with starting afresh after pressing result
let clicked = false;
//equals event listener
let equalsTo= document.getElementById("equals");
//makes a subtraction of the two given numbers
equalsTo.addEventListener("click", function(e){
 //shorten the parameters
let x = sessionStorage.getItem("operator");
let y= sessionStorage.getItem("dispNumber");
let z = display.textContent;
console.log (x + "= operator" );
console.log (y + "= displaynumber");
console.log (z + "textcontent");
operate(x,y,z);
display.textContent= (operate(x,y,z));
sessionStorage.removeItem("dispNumber");
   sessionStorage.removeItem("operator");
   sessionStorage.removeItem("chainNumber");
   sessionStorage.setItem("dispNumber", display.textContent);
   console.log(sessionStorage.getItem("dispNumber"));
   //disable the float button
   floatButton.disabled=true;
//get the clicked true so that the digits function can check it
   clicked= true;
 
})

//disable operation buttons at the beginning
additionButton.disabled=true;
subtractionButton.disabled=true;
multiplicationButton.disabled=true;
divisionButton.disabled=true;





