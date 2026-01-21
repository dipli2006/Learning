//do-while loop
//do{
//  some block
//}
//while(condition);
let i=1;    
do{
    console.log("me..");
    i++;
}while(i<3);

//for-of loop
//for(var_name of array or string){
//  some block
//}
let language="Javascript";
for(let lang of language){
    console.log(lang);
}

//for-in loop
//for(var_name in object or array){
//  some block}
 let stu={
    name:"divya",
    age:19,
    course:"BTech"
 };

 for(let key in stu){
    console.log("key=",key,"value=",stu[key]);
 }

 //Strings
 //creation
let str1="hello";
let str2='world';
console.log(str1.length);
console.log(str2[3]);

//template literals
console.log(`${str1} ${str2}`);
//escape chracters
console.log("hello \n world");
console.log("hello \t world");
console.log("hello \\ world");