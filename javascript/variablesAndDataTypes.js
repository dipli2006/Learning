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
const year="II";//block scoped
//const is used for constant value cannot be redecalred or updated
//year="III";error
//const year="IV";error
console.log(year);

{
    let a=5;
    console.log(a);
    //let a=15;error
    //block scoped variable
}
{
    let a=10;//this will not throw error
    console.log(a);
}
//datatypes Number,String,Boolean,null,undefined,Symbol,BigInt,Object
//object 
const student={
    name:"divya",
    age:19,
};
console.log(student);
console.log(student["name"]);

student["age"]=student["age"]+1;//updating object property
console.log(student["age"]);

student["name"]="deepika";
console.log(student["name"]);

