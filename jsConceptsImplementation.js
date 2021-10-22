// This file contains the implementation of the following concept--
/**
- Variables, Data Types, Type Conversion, Loops, Conditionals, Undefined, null, Type Coercion
- Functions (expressions, declarations)
- Scopes (global, function, block), 
- Variable Hoisting
- Compilation vs Interpretation, Debugging
- Objects (Literals, Constructor Functions, Methods, Nested Objects, dot vs brackets notation for access)
- Arrays - read docs of common array methods,
- Nested Functions, Anonymous Functions, IIFE and when to use it
- Functions/Code as arguments
- Closures
- Object methods and uses of "this" 
- 4 flavours of this, Apply vs Call
- Function "arguments" array, Object.assign
- Read about Date, Math, string
- Prototypical Inheritance/OOP in JS
- Event Loop, Async Flows, setTimeout
- Async/Await vs. Promises
 */

// // // // // Variables, Data Types, Type Conversion, Loops, Conditionals, Undefined, null, Type Coersion

// Variables: In JS varibales can be defined as following;
var variable1; // Not suggested in modern js
let variable2;
const variable3 = 0;

// Data types: JS has 7 data type as following;
const number = 10; // Can be used as both integers and decimals

const firstName = "Tamur"; // String type provides 3 ways of declaring stings
// 1) "Double Quotes",
// 2) 'Single Quotes',
// 3) `Backticks | template litteral`
const templateLitteral = `${firstName}[${number}]`;

const arrayType = [1, 24, 5, 9, 3]; // Array Type

const userData = {
  fullName: "Tamur",
  jobPosition: "Associate software developer",
}; // Object Type

const nullType = null; // Null Type

const undefinedType = undefined; // Undefined Type

const bigInt = 123456n; // Big int (a data type used to represent very large number greater than int)

// Type Conversion:
// String Conversion,
const convertBool = true;
console.log(typeof convertBool);
console.log(typeof String(convertBool));

// Number conversion,
console.log("6" / "2"); // converts string to numbers

console.log(Number(" 123 ")); //123
console.log(Number("123px")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Boolean conversion,
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("String")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false

// Loops
// For loop
for (let i = 0; i < arrayType.length; i++) {
  console.log("For loop: ", arrayType[i]);
}

// While loop
let j = 0;
while (j < arrayType.length) {
  console.log("While loop:", arrayType[j]);
  j++;
}

// Do-While loop
let k = 0;
do {
  console.log("Do while loop:", arrayType[k]);
  k++;
} while (k < arrayType.length);

// For of loop
for (const [k, v] of Object.entries(userData)) {
  console.log(`for of loop: Key: ${k}, Value: ${v}`);
}

// Conditionals
const flag = 1;

if (flag) console.log("True");
else console.log("False");

// Ternary operator
const res = flag != 0 ? "True" : "False";
console.log(res);

// Type coersion
/**
 * JS implicitly convertes the datatypes if used like below or if used non strict equality operator

true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0
 */

// // // // // Functions

// Function expression, we can not call function created using function expression before its definition
const sayHello = function (name) {
  console.log(`Hello, ${name}!`);
};

sayHello("Ali");

// Function declaration,
doGreeting("Tamur");

function doGreeting(name) {
  console.log(`Hello, ${name}!`);
}

// // // // // Scopes

// Global scope
const gv = "Global Scope Variable";

// Local/Functional scope
{
  const lv = "Local Scope Variable";
  {
    // Block scope
    const bv = "Block Scope Variable";
    console.log(bv);
    console.log(lv);
    console.log(gv);
  }
  //   console.log(bv);   // Can't access this variable cause its in block scope
  console.log(lv);
  console.log(gv);
}
// console.log(bv);    // Can't access this variable cause its in block scope
// console.log(lv);    // Can't access this variable cause its in local/functional scope
console.log(gv);

// // // // // Variable Hoisting
x = 5;
var x;
console.log(x);

// const and let will not let you do that there will be two errors, refernece error, const without initialization error

// // // // // Compilation vs Interpretation, Debugging
