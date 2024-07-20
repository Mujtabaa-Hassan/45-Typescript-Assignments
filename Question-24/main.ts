// Strings Test Checking Equality and inequality
let str1 = "orange";
let str2 = "Orange"
console.log("Testing equality with strings:");

console.log(str1 !== str2); // True
console.log(str1 == str2); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Orange".toLowerCase() == "orange"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["Orange", "Lichi", "Banana"];
console.log("Is 'Banana' in fruits?");
console.log(fruits.includes("Banana")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True