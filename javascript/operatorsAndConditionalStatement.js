//comparison operator
//==  equal to
//!= not equal to
//=== and equal to and type
//!== not equal to and type
let a=3;
let b="3";
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

//ternary opeartor
//condition ? true : false
console.log(a>18 ? "adult" : "not adult");

//if statement
let mood="light-mode";
let color;
if(mood==="dark-mode"){
    color="black";
}
else{
    color="white";
}
console.log(color);

//switch statement
let day=3;
let dayName;    
switch(day){
    case 1:
        dayName="Monday";       
        break;
    case 2:
        dayName="Tuesday";  
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;      
    case 5:
        dayName="Friday";
        break;      
    case 6:
        dayName="Saturday";
        break;      
    case 7:
        dayName="Sunday";
        break;      

    default:
        dayName="Invalid day";        
}
console.log(dayName);

//prompt and alert
alert("Learning JS");
//prompt will show the sentence but takes a input
prompt("Enter your name");
