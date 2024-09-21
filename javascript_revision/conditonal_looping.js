// conditional statements

// if else
// ternary operator
// switch case

let num = 12

if (num > 12) {   // boolean
  console.log("greater then 12");
} else if (num < 12) {
  console.log("less then 12");
}
else {
  console.log("numer is 12");
}


// max of 3 numbers

let a = 56
let b = 55
let c = 99


if (a > b && a > c) {
  console.log("a is greater");
} else if (b > c) {
  console.log("b is greater");
} else {
  console.log("c is greater");
}

// max of four number

let x = 12
let y = 23
let z = 34
let p = 45


if (x > y && x > z && x > p) {
  console.log("x is greater");
} else if (y > z && y > p) {
  console.log("y is greater");
} else if (z > p) {
  console.log("z is greater");
} else {
  console.log("p is greater");
}

let data = 4

switch (data) {
  case 1:
    console.log("one")
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  default:
    console.log("other");
}
// ternary  operator  // ? :

let age = 12

// oneliner if else
age>=18 ? console.log("vote kar") : console.log("vote nahi kar");

let eligible = age >= 18 ? 12 : 66
console.log(eligible);

let bool = true;

switch (12 > 13) {
  case true:
    console.log("true");
    break;
  case false:
    console.log("false");
    break;
  default:
    console.log("default");
}

// looping in javascript

// initial value
// condition
// increment
// decrement

// while loop
// do...while

let n1 = 45
while (n1 > 12) {
  console.log(n1);
  n1--;  // 44
}

n1 = -1

do {
  console.log(n1);
  n1--;
} while (n1 > 2)

for (let i = 1; i <= 20; i++){
  console.log(i);
}

let numbers = [1, 5, 3, 3, 88, 43, 3, 5, 6, 4, 33, 3, 3, 5, 9];

for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

for (let n in numbers) {
  console.log(n);
}

name1 = "Bascom"  // sequance of characters

for (let n of name1) {
  console.log(n);
}

for (let n of numbers) {
  console.log(n);
}


numbers = [1, 5, 7, 9, 34]

sum =0
numbers.forEach((item,index,arr) => {
  sum = sum + item;
  console.log("index is",index);
})

console.log("Sum is ",sum);
