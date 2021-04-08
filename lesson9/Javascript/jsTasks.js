// 1
let name = "Karol";

let age = 40;

let isOpen = true;

let stringBoolean = "true";

let stringNumber = "100";

// 2
let name = "Michał";
console.log(name);

let hello = "Hello Ania";
console.log(hello);

let number = 4;
console.log(number);

let boolean = false;
console.log(boolean);

// 3
let name = "Karol";
console.log(name);

let age = 40;
console.log(age);

let isOpen = true;
console.log(isOpen);

let stringBoolean = "true";
console.log(stringBoolean);

let stringNumber = "100";
console.log(stringNumber);

// 4
let number = 2;
console.log(number + number);

let name = "Michał ";
let surname = "Kowalski";
console.log(name + surname);

let number = 2;
console.log(number + number * number);

// 5
let stringNumber = ", 4";
let number = 4;
console.log(number + number + stringNumber);

// 6
let number = 1;
number = 2;
number = 3;
console.log(number);

// 7
function add() {
  return 2 + 2;
}

function string() {
  return "Hello World!";
}

function boolean() {
  return true;
}

function modulo(a, b) {
  return a % b;
}
modulo(6, 4);

function power(a, b) {
  return a ^ b;
}
power(3, 4);

function concatString(a, b) {
  return a + b;
}
concatString("Hello, ", "how are you");

function multiple(a, b) {
  return a * b;
}
multiple(5, 60);
multiple(3, 3600);

function calc(a, b, c) {
  return (a * b) / c;
}
calc(10, 9, 2);

function minus(a, b) {
  return a - b;
}
minus(10, 200);

// 8
let arr = [1, 2, 3];

let arr = ["Skoda", "Audi", "BMW", "Honda", "Volkswagen"];

let arr = [true, false, true];

let arr = [];

let arr = [true, "Maciek", 3.14, false, "Warning"];
console.log(arr[1]);

let arr = [1, 2, 3];
console.log(arr.length);

let arr = [];
arr.push(Math.random());
console.log(arr);

// 9
let obj = {};

let person = {
  name: "Iza",
};

let personDetails = {
  name: "Łukasz",
  lastName: "Walczak",
  age: 39,
  drivingLicense: true,
};

console.log(personDetails.age);

console.log(personDetails);

// 10

function add(a, b) {
  return a + b;
}

function logString(a) {
  console.log(a);
}

function boolean(a) {
  return a;
}

function modulo(a, b) {
  return a % b;
}
function power(a, b) {
  return a ^ b;
}

function addStrings(a, b) {
  return a + b;
}

function getSecondsFromMinutes(a) {
  return a * 60;
}

function getSecondsFromHours(a) {
  return a * 60 * 60;
}

function triangle(a, b) {
  return a * b * 0.5;
}

function getDaysFromYear(a) {
  return a * 365;
}

function selfPower(a) {
  return a ^ a;
}

function sideTriangle(side1, side2) {
  return side1 + side2 - 1;
}

function hello(a) {
  return "Cześć, " + a + "!";
}

function age(a) {
  return 2021 - a;
}

function score(a, b) {
  return a * 2 + b * 3;
}
