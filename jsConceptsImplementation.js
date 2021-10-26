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

// Compilation:
/* In compilation the code is directly converted from human code or machine code.
and this code is repeatedly being built when ever there is a change in code */

// Interpretation:
/* Interpreters does not convert the code to machine code directly, instead they go line by line and execute the code.
changes can be made without building the code repeatedly. After everything is okay then we can build the code and its being converted to machine code. */

// Debugging:
/* Debugging is the process of detecting and removing of existing and potential errors (also called as ‘bugs’) in a software code that can cause it to behave unexpectedly or crash. */

// // // // // Objects (Literals, Constructor Functions, Methods, Nested Objects, dot vs brackets notation for access)

const user = {
  fullName: "Tamur Ahmed",
  age: 25,
};

user.employed = true;

user["residence"] = "Lahore";

console.log(user);

console.log(user.employed);
console.log(user["residence"]); // or we can pass on some variabel with the key name and it will display the value

// Nested Objects

user.address = {
  houseNo: "House No BIV/987, ",
  streetNo: "Street No 2, ",
  area: {
    colony: "Wireless colony, ",
    road: "Airport Road, ",
  },
  city: "Rahimyar Khan, ",
  state: "Punjab, ",
  country: "Pakistan",
};

console.log(user);

console.log(user.address.area.road);

// Methods
user.intro = function () {
  console.log(
    `Hi my name is ${this.fullName}. I'm ${this.age} years old. I'm ${
      this.employed ? "Employeed" : "Unemployeed"
    }. I'm originally from ${this.address.city}${this.address.state}`
  );
};

user.intro();

// Constructor Function
function addUser(name) {
  this.name = name;
  this.isEmployeed = false;
}

const newUser = new addUser("Tamur");
newUser.isEmployeed = true;
console.log(newUser);

// // // // // Arrays - read docs of common array methods,

// Array decleration
const arr1 = [0, 1, 2, 3];
const arr2 = new Array(5).fill(1);

// arr1.forEach(); // Looping method to do some operation for each element in array
// arr1.length; // Returns the length of array
// arr1.slice(); // To copy whole or specified array elements
// arr1.splice(); // To delete and/or new elemets at place of deletion, changes orignal array
// arr1.map(); // Returns new array after applying the specified operation,
// arr1.reduce(); // Reduces array to single element by adding all the elements
// arr1.filter(); // Filters out the array with given condition, Returns new array
// and so on....

// // // // // Nested Functions, Anonymous Functions, IIFE and when to use it

// Nested Functions (aka Clouser)
function addSquares(a, b) {
  function getSquare(x) {
    return x * x;
  }
  return getSquare(a) + getSquare(b);
}

console.log(addSquares(2, 3));
console.log(addSquares(5, 15));
console.log(addSquares(25, 100));

// Anonymous Functions (aka Function expression)
const square = function (number) {
  return number * number;
};

console.log(square(11));

// IIFE (Immediately invoked function expression)
(function () {
  const var1 = 10;
  const var2 = 15;
})();
// Used to avoid poluting the global space (can be used to initialize global variables)
// IIFE could also be use to create private and public variables and methods. (To implement module patterns)

// // // // // Functions/Code as arguments

// Function that requires a function as 1st argument and an array as 2nd argument
function map(func, arr) {
  const result = new Array(arr.length).fill(0); // Create a new Array

  for (let i = 0; i != arr.length; i++) result[i] = func(arr[i]);
  return result;
}
// A function just to calculate cube of given number
const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);

// // // // // Object methods and uses of "this"
/**
 * Object.assign() // Copies the values of all enumerable own properties from one or more source objects to a target object.
 * Object.create() // Creates a new object with the specified prototype object and properties.
 * Object.entries() // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
 * Object.keys() // Returns an array containing the names of all of the given object's own enumerable string properties.
 * Object.values() // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
 * and so on....
 */

// // // // // 4 flavours of this, Apply vs Call
/**
 * In browser: this points to window object
 * In Nodejs: this points to globalThis
 * In functions: this behaves according the caller (if browser: its window, if Nodejs: its globalThis)
 * In Strict mode: this is always undefined in functional scope, to solve this issue we have Call and Apply functions
 * In classes: this behaves almost the same, except the static members are not added to this prototype of class
 */

// Apply method,
// It calls the function with specified this keyword and argument passed as an array or array like object

// Call method,
// It calls the function with specified this keyword and argument passed individually.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// console.log(new Food("cheese", 5).name);

const inputs = ["cheese", 5];

function Food(argArr) {
  Product.apply(this, argArr);
  this.category = "food";
}

console.log(new Food(inputs).name);
// expected output: "cheese"

// // // // // Function "arguments" array, Object.assign
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

// Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// // // // // Async/Await vs. Promises

// Call back
function printString() {
  console.log("Tom");

  setTimeout(function () {
    console.log("Jacob");
  }, 300);

  console.log("Mark");
}
const flagPromise = false;

// Promise
const testPromise = new Promise((resolve, reject) => {
  if (flagPromise) reject("Promise rejected!");
  else resolve(printString());
});

// testPromise
//   .then(() => console.log("Promise FullFilled."))
//   .catch((e) => {
//     console.log(e);
//   });

// Async/Await
try {
  await testPromise;
} catch (e) {
  console.error(e);
}
