
// map method
// const numbers = [3,4,6,7,3]
// const square = function(number){
//     return number * number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

//  Filter
// const numbers = [1,2,3,4,5,6,7,8];
// const isEven = function(number){
//     return number%2===0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// reduce Method
const numbers = [1,2,3,4,5];

// aim : sum of all the numbers of Array

const sum = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue);
console.log(sum);

// JavaScript Program to Check Whether a String is Palindrome or Not
// function checkPalindrome(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; 1++) {
//       if (string[i] !== string[len - 1 - i]) {
//             return 'false';
//         }
//     }  
//     return 'true';
// }
// const string = 'madam';
// const value = checkPalindrome(string);
// console.log(value);


// javascript function to Display the Multiplication Table

// function printTable(num) {
//     for (let i = 1; i <= 10; ++i) {
//     document.write(num + "*" + i + " = " + num * i )
// }
// }
// var num = 5;
// document.write("Number: " + num );
// document.write("Multiplacation table of " + num );
// console.log(num);

// const number = parseInt(3);
// for(let i = 1; i <= 10; i++){
//     const result = i* number;
//     console.log(`${3} * ${i} = ${result}`);
// }


// JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.

// const str = 'the quick brown fox';
// const arr = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// const str2 = arr.join(" ");
// console.log(str2);

// JavaScript Program to Reverse a String		
// function reverseString(str){
//     let newString = "";
//     for (let i = str.length - 1; i >=0; i--){
//         newString += str[i];
//     }
//     return newString;
// }
// const string = ("newString");
// const result = reverseString(string)
// console.log(result);

// JavaScript Program to Check if a Key Exists in an Object.
//  -> return true if key is exist else return false

// const person = {
//     empid:1,
//     empname: 'AAA',
//     empage:23
// }
// const hasKey = 'empname' in person;
// if(hasKey) {
//     console.log('true');
// }
// else {
//     console.log('false')
// }

// let fruits = ["apple", "mango", "banana", "grape"];
// for(let i=0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// printing Array Element (printing nummber from 0 to 9)

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// JavaScript Program to Loop Through an Object

// const object = {
//     apple: 12,
//     orange: 34,
//     pear: 32,
// };
// Object.values(object).forEach(value => console.log(value));
    


// const baseValue = prompt('3');
// const heightValue = prompt('6');
// const areaValue = (baseValue * heightValue)/2;
// console.log(areaValue);


// add an element in array
// let fruits = ["apple","banana","orange", "pineapple"];
// fruits.splice (0, 2);
// console.log(fruits)



// let fruits = ["apple","mango","grapes","banana "];
// console.log(fruits[2]);


// // Simple Function 
// function OddOrEven(num) {
//     if(num%2=== 0) {
//         return "Even"
//     } else {
//         return "Odd";
//     }
// }
// console.log(OddOrEven(9));



// const LIMIT = 5;
// let star = "";
// for(let count=0; count <= LIMIT; count++) {
//     star = "";
//     for(let j = 0; j < count; j++) {
//         star = star + "*";
//     }
//     for(let j < 5; j > count; j--){
//         star = star - "*";
//     }
//     console.log(star);
// }



// closure example
// function Employee() {
//     let localtion = "Pune";
//     function getNameWithLocation(param) {
//         return "My name is "+param + " & My localtion is "+localtion;
//     }
//     return getNameWithLocation;
// }
// // One way to call function 
// let getNameWithLocation = Employee();
// const ot = getNameWithLocation("Shriansh");
// console.log(ot);
// // another way to call function
// const output = Employee()("Ganesh");
// console.log(output);

// function Student() {
//     let location = "Plano";
//     function getNameWithLocation(param){
//         return "My name is "+param + " & My location is "+ location;
//         }
//         return getNameWithLocation;
// }

// let getmynameWithlocation = Student();
// const output= Student()("Vandana")
// console.log(output);

// let x = myFunction(4,3);
// function myFunction(a,b) {return a * b; }
// console.log (x)


// Functino Curreing Example type of closure    
// function MakeMinus(initialValue) {
//     let substract=function(num2) {
//         return initialValue - num2;
//     }
//     return substract; 
// }

// let substractFive = MakeMinus(50);
// console.log(substractFive(10));
// console.log (substractFive(15));

// function Multiplication(initialValue) {
//     let x=function(num2){
//         return initialValue * num2;
//     }
//     return x;
// }
// let multiply2= Multiplication(50);
// console.log (multiply2(10))
// console.log (multiply2(11))

// let addHundred = MakeAdder(100);
// console.log(addHundred(200));
// console.log(addHundred(10));
// console.log(addHundred(50));


// let obj = {
//     name: "Test",
//     location: "Pune",
// };
// let ar = ["Apple", "pineapple"];
// let num = 100;
// let str = "Test";

// function Ref(obj, num, ar, str) {
//     obj.name = "Ganesh";
//     num = 200;
//     ar[0] = "Banana";
//     str = "Ganesh";
//     console.log(obj, num, ar, str);
// } 

// Ref(obj, num, ar, str);
// console.log(obj, num, ar, str);

// // Pure Function Example
// function PureFunction(obj, ar) {
//     console.log(obj);
//     if(obj.name === "Ganesh" || ar[0] === "Apple") {
//         return true;
//     }
// }
// const val = PureFunction(obj, ar);
// console.log(val);

// function PureFunction2(name, fruit) {
//     if(name === "Ganesh" || fruit === "Apple") {
//         name = "Nitin";
//         return true;
//     }
// }
// const val2 = PureFunction2(obj.name, ar[0]);
// console.log(val2);

// // anotherfile.js
// function TestingRef(obj) {
//     console.log(obj);
// }
// TestingRef(obj);



// const users = [
//     {userID: 1, firstName: 'abc', gender: 'male'},
//     {userID: 2, firstName: 'def', gender: 'male'},
//     {userID: 3, firstName: 'ghi', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.gender);
// }


// let firstname = "van"

// console.log(firstname.length)
// console.log(firstname[firstname.length-3]);



// let obj = {
//     name: "Test",
//     location: "Pune",
// };
// let ar = ["Apple", "pineapple"];
// let num = 100;
// let str = "Test";

// function Ref(obj, num, ar, str) {
//     obj.name = "Ganesh";
//     num = 200;
//     ar[0] = "Banana";
//     str = "Ganesh";
//     console.log(obj, num, ar, str);
// } 



// const LIMIT = 10;
// let count = 1;
// for(let count = + 1) 
//     console.log(count);

// function Multiplication(number1, number2, number3, number4) { 
//     let total = number1*number2*number3*number4;
//     return total;
// }

// const multip= Multiplication(3,6,1,3);
// console.log(multip)


// let age = 4
// let drink;

// if(age>=5){drink = "coffee"
// }else{drink = "milk"
// }
// console.log(drink);

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);

// console.log (target);

// console.log(returnedTarget);

// const obj = { i: 20 
// };

// Object.freeze(obj);

// obj.i = 33;

// console.log(obj.i);


// let student = {
//     fname: 'test',
//     lname: 'lname',
//     location: 'Pune',
//     marks:{
//         english: 70,
//         maths: 40,
//         hindi: 77,
//         cc:  60,
//         ee: 50
//     }
// };

//  console.log(Object.keys(student));


// let ar = 10
// let total = (10+ar)
// while(ar<=100){
//     total = total + ar; ar++}
//  console.log(total);


// [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];





// let arr = ["Apple", "Banana", "orange"];
// arr.splice(2, 0, 'pineapple') 
// console.log(arr);

// const myArray = ['item1', 'item2', 'item3'];

// const deletedItem= myArray.splice(1);
// console.log("deleted item", deletedItem)
// console.log(myArray);

// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted itme2")
// console.log("deleted item", deletedItem);
// console.log(myArray);

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);

// const numbers = [3,9,5,7];
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

// const myArray = ["Hello", "cat", "dog", "lion"];

// // function islength3(string){
// //     return string.length === 3;
// // }

// const users = [
//     {userId : 1, userName: "name1"},
//     {userId : 2, userName: "name2"},
//     {userId : 3, userName: "name3"},
//     {userId : 4, userName: "name4"},
//     {userId : 5, userName: "name5"},
// ];

// const myUser = users.find((user)=>user.userId===1);
// console.log(myUser);


// const products = [ 
//     {product: 1, productname: "p1", price: 300},
//     {product: 2, productname: "p2", price: 200},
//     {product: 3, productname: "p3", price: 100},
//     {product: 4, productname: "p4", price: 350},
// ]

// products.sort((a,b)=>{
//     return a.price-b.price});
// console.log(products);
    

// products.sort((a,b)=>{
//     return b.price-a.price});
// console.log(products);


// // '0' : 60
// // '1' : 50
// // '3' : 89
// // '4' : 768

// const numbers = [5,9,1200, 400,3000];
// numbers.sort();
// console.log(numbers);



// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value is num1 is", num1);


//break keyword and continue keyword

// for(let i=1; i<=10; i++)
// {if(i===4){
//     continue;
// }
// console.log(i);
// }

// for(let i=0; i<=12; i++){console.log (i)}


// for loop in array
// let fruits = ["apple","mango","grapes","banana "];
// console.log(fruits[2]);


// console.log(fruits.length);
// console.log(fruits[2])

// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// //push
// fruits.push("banana");
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);


// let obj = {}; // object literal
// // let obj = {};
// // console.log(fruits);
// // fruits[1] = "banana";
// // console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

