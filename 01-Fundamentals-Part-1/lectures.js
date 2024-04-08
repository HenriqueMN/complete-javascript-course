/* Lecture 01 - Variable names, let and console.log
 * To declare a variable in JavaScript we use the keyword "let"
 * The usual convention for variable names is camelCase (first letter lowercase and all the subsequent uppercase)
 ! Variable names CANNOT start with number
 ! Variable names can only contain letters, numbers, underscores or dollar signs
 ! Variable names CANNOT be reserved keywords (avoid "name" as well)
 ! Variable names should not be started with an uppercase letter
 * Constants (variables that won't have its value changed) are named all in uppercase
 * Variable names should be descriptive, that is, you should know right away what value are they storing


let firstName = "Henrique";

console.log(firstName); // + The function console.log() is used to write something in the console. It can receive more than one value at a time (e.g., console.log(firstName, middleName, lastName)), concatenate strings (e.g., console.log("1", "+", "2")) and receive template literals (e.g, console.log(`My first name is ${firstName}.`))
 */

/* Lecture 02 - Variable types, JavaScript typing and typeof
 * In JavaScript, every value is either an object or a primitive value
 * Primitive types: number, string, boolean, undefined, null, symbol and big int
 * * Number => Floating point numbers
 + + + Used for decimal and integers
 * * String => Sequence of characters, must be declared between quotes
 + + + Used for text
 * * Boolean => Logical type that can only be true (1) or false (0)
 + + + Used for taking decisions
 * * Undefined => Value taken by a variable that is not yet defined ("empty value"). It's both the type and the value
 * * Null => Empty value
 * * Symbol => Value that is unique and cannot be changed
 * * BigInt => Numbers larger than what the Number type can hold
 ! JavaScript has dynamic typing, i.e., JS automatically defines the data type of the VALUE stored in the variable, meaning that what was declared as a string, may become a boolean, a number or something else as the code grows



let thisIsAnInteger = 10;
console.log(typeof thisIsAnInteger); // + The operator typeof returns the type of the value stored in the variable

let thisIsADecimal = 12.5;
console.log(typeof thisIsADecimal);

let thisIsAString = "string";
console.log(typeof thisIsAString);

let thisIsABoolean = true;
console.log(typeof thisIsABoolean);

let thisIsUndefined;
console.log(typeof thisIsUndefined);

thisIsAnInteger = "10";
console.log(typeof thisIsAnInteger); // * No longer an integer => Dynamic typing

console.log(typeof null); // ! The operator typeof returns "object" when used with null. It's regarded as a mistake, because null isn't an object, but it was never fixed for legacy reasons
 */

/* Lecture 03 - Declaring variables: let, const and var
 * let and const were introduced in ES6
 * let: declare variables that can have its value mutated or be declared without a value
 * const: declare variables that cannot be changed at any point
 + Clean code: const by default and let only when 100% the variable will change eventually, because it's a good practice to avoid variable mutations as much as possible to avoid bugs
 * var: it works similarly to let
 ! var should be avoided
 ! Declaring a variable without one of the keywords will result in the variable being created on the global object


let age;
age = 31;
console.log(age);

age = 32;
console.log(age);

const birthYear; // ! Missing initializer in const declaration
const birthYear = 1999;
console.log(birthYear);

birthYear = 2000; // ! Assignment to constant variable
console.log(birthYear);

var month;
month = "November";
console.log(month);
 */

/* Lecture 04 - Basic operators
 * Arithmetic operators: 
 * * (+): sum
 + + + We can use the + operator to concatenate strings as well
 * * (-): subtract 
 * * (*): multiply 
 * * (/): divide 
 * * (**): exponentiate
 * Assignment operators: 
 * * (=): assigns the value after the equal to a variable 
 * * (+=): sums the variable with the value after the equal 
 * * (*=): multiplies the variable with the value after the equal 
 * * (/=): divides the variable for the value after the equal 
 * * (++): adds +1 to the variable
 ! ! ! Doesn't work directly in the console, you have to do it first, then log in the console
 * * (--): subtracts 1 from the variable
 * Comparison operators
 * * (>): greater than 
 * * (<): lesser than 
 * * (>=): greater or equal than 
 * * (<=): lesser or equal than 
 * * (==): equal value 
 * * (===): equal value and equal type
 * * (!=): different value
 * * (!==): different value or different type
 */

/* Lecture 05 - Operator precedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 */
