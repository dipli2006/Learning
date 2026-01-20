console.log("Learning JavaScript variables!");

age=24;
name="divya";
console.log(age);
console.log(name);

x=null;//empty value
y=undefined;//value not assigned
console.log(x);
console.log(y);

isTrue=true;
isFalse=false;
console.log(isTrue);
console.log(isFalse);

name=35;
console.log(name);//dynamically typed language

let fname="divya";
//let is used to update but not redeclaration
fname="deepika";
fname="manshi";
//let fname="anju";error
console.log(fname);
var cl="AIDS";
var cl="HIV";
cl="aiml";
console.log(cl);
//var is used for redeclare and update
const year="II";
//const is used for constant value cannot be redecalred or updated
//year="III";error
//const year="IV";error
console.log(year);

{
    let a=5;
    console.log(a);
    //let a=15;error
}
{
    let a=10;//this will not throw error
    console.log(a);
}