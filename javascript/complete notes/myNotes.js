fullName = "Abhinav kumar";
console.log(fullName);
x=null;
y=undefined;         //javascript is a dynamically typed language.

/**/    // this is another way of creating comments.

//Arithmatic operators.


let a = 2;
let b= 3;

console.log("a + b =" , a+b);  
console.log("a - b= ", a-b);
console.log("a * b= ", a*b);
console.log("a / b= ", Math.floor(a/b));   //floor is used to print a number which is less than or equal to the given number.
console.log("a % b= ", a%b);
console.log("a ** b= ", a**b);
a++;
b--;
console.log("a++ = ", a);    //unary operators
console.log("b-- = ", b);

//Assignment operators

let c = 5;
let d = 6;
console.log("c+= -> " ,c+=1);
console.log("c-= -> " ,c-=1);
console.log("c/= -> " ,c/=1);
console.log("c*= -> " ,c*=1);
console.log("c%= -> " ,c%=1);
console.log("c= -> " ,c+=1);

//Comparison operators

let first = 5;
let second = 3;
//   == compares two values 
//   === compares two values with respect data types.
console.log("5 == 3", 5== 3);  
console.log("5 != 3", 5!= 3);
console.log("5 >= 3", 5>= 3);
console.log("5 <= 3", 5<= 3);
console.log("5 < 3", 5 < 3);
console.log("5 > 3", 5 > 3);

// conditional statements
// 1 -> 
let color = "black";
let mode;
if(color === "black"){
    mode = "black";    //if condition is true or satisfied the statements inside will execute.
}

console.log(mode);
//2 ->
let age = 21;
if(age == 21){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}


// 3 ->
// Ternary operators

let result = age>=18 ? "eligible": "not eligible";
console.log(result);
// -> Homework problem

/*let input = prompt("check whether given number is divisible by 5 ot not : ");

if(input % 5 ==0){
    console.log(input + " "+ "is divisible by 5");
}else{
    console.log(input + " "+ "is not divisible by 5");
}

alert("Congractulations on completing your first question 😀😀 ");*/

let marks=30;

if(marks>=80 && marks <=90){
    console.log("Grade A");
}else if(marks >=70 && marks <=89){
    console.log("Grade B");
}else if(marks >=60 && marks <=69){
    console.log("Grade C");
}else{
    console.log("Grade D");
}




























