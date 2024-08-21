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
// ----> conditional statements.
/*let marks=30;

if(marks>=80 && marks <=90){
    console.log("Grade A");
}else if(marks >=70 && marks <=89){
    console.log("Grade B");
}else if(marks >=60 && marks <=69){
    console.log("Grade C");
}else{
    console.log("Grade D");
}*/

//  ---> for loop
for(let count = 1; count<=5 ; count++){
    console.log("Abhinav Kumar");
}

for(let count = 1; count<=5 ; count++){
    console.log(count);
}

// sum of n natural numbers
let sum = 0;
for(let i=1;i<=10;i++){
    sum += i;
}
console.log(sum);

// -----> while loop
/*
while(condition){      // the condition in the while loop is stopping condition.
    statements;
}
*/

let myvar =1;
while(myvar<=5){
    console.log(myvar);   // if we do not mention any increment statement then while loops goi to infinite.
    myvar++;
}


// ---> do while loop
let mynum = 15;
do{
    console.log(mynum);
    mynum++;
}while(mynum <= 20);


//   ----> for-of loop      // this loop helps to iterate over arrays and strings. it makes simpler

let str = "Abhinav";
for(let i of str){
    console.log("i=", i);
}

// --->this is a small game guessing the game number.
/*
let gameNumber = 38;
let userNumber = prompt("Enter a number that matches with game number : ");
if(userNumber == gameNumber){
    console.log("you have won the game");
}else{
    console.log("you have lost the game. better luch next time");
}*/

//     Strings 

let st = "     Abhinav";
console.log(st.length);
console.log(st.toUpperCase());
console.log(st.trim());
console.log(st.replace("nav", "kumar"));
console.log(st.slice(6,12));   // starting value noe considered.
console.log(st.charAt(6));


//we can access the individual characters.

console.log(st[0]);
console.log(st[2]);
console.log(st[5]);
console.log(st[6]);


//   string literal

/*

string literals are used to create special sentences.
and we can write all the sentence within the back ticks ` string literals `.
if we want to write variables, we can write like this ${ variable that prints values }.
*/
console.log(`This is to print the string ${st}`);  // this is the example of string lkiterals.

// ----> small game
/*
let userName = prompt(" Enter your full name : ");
let len = userName.length;
alert(`Your user name is @${userName}${len} `);
*/
 
// ----> functions  
// suppose if we want to perform any operation more than once or repeated we use functions.


/*

--> Below is the creation of function

function sunctionName(parameters){
  //code statements
}

---> function calling

functionName(parameters)



function myFunction(){
    console.log("My name is Abhinav");
    console.log("This is the implementation of function");
};

myFunction();
*/

//direct way of creating a function.
function add(a, b){
    s = a + b;
    return s;
};

let val = add(2,3);
console.log(val);


// creating a function using arrow keyword.
let sumNum = (x, y) => {
    return x+y;
};
let val1 = sumNum(4,3);
console.log(val1);


// function to print vowels in a string.
let count =0;
function findVowels(str){
    for(let i of str){
        if(i === 'a' || i==='e'||i==='o'||i==='i'||i==='u'||i === 'A' || i==='E'||i==='I'||i==='O'||i==='U'){
                 count += 1;
            }
    }
    return count;
}

let name = findVowels("aeiouaeiou");
console.log(`The no. of vowels in the given string is ${name}`);


 




























