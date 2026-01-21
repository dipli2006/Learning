//1.create a const object for product
const product={
    name:"pen",
    ratings:4,
    offer:5,
    price:270,
    isDeal:true
};

console.log(product);

//2.const object profile for socuilmedia
const profile={
    username:"divya",
    followers:"565K",
    noOfPosts:120,
    isFollowing:true,
    description:"artist"
};

console.log(profile);
console.log(typeof profile["followers"]);

console.log(typeof profile["isFollowing"]);

//3.get num from user and check multiple of 5
let num=prompt("enter the number");
if(num%5==0){
    console.log("divisible by 5");
}
else{
    console.log("not divisible");
}

//4.give grades according to their scores
let score=prompt("enter your score");
if(score>=80 && score<=100){
    console.log("A grade");
}
else if(score>=70 && score<80){
    console.log("B grade");
}   
else if(score>=60 && score<70){
    console.log("C grade");
}   
else if(score>=50 && score<60){
    console.log("D grade");
}
else if(score>=0 && score<50){
    console.log("F grade");
}

//5.print all even numbers 0 to 20
for(let i=2;i<=20;i+=2){
    console.log(i);
}
