// Comments

// This is an in-line comment

/* This is a 
multi-line comment */

// JavaScript Variables

/* javascript provides 8 different data types: undefined, null, boolean, string, symbol, bigint, number and object. variables allow us
to store and manipulate data dynamically. you can define a variable by using the keyword 'var' in front of it*/

var ourName

// in javascript you can store a value in a variable by using the '=' sign

myVariable = 5

// once you assign a value to the variable, you can assign that value to another variable, like so:

var myVar 
myVar = 5
var myNum
myNum = myVar

// it is common to initialize a variable to an initial value in the same line it is declared

var newVar = 0

// you can also decare string variables

var myName = 'nate' // 'nate' is called a string literal...a series of zero or more characters enclosed in single or double quotes

// when javascript variables are declared, they have an initial value of 'undefined'

/* in javascript all variables and function names are case sensitive. MYVAR is not the same as MyVar or myvar. best practice says to use 'camel case' when 
naming your variables and functions */

var someVariable
var anotherVariableName
var thisVarNameIsSoLong

/* with the var keyword, it is easily overwritable. so in later versions of javascript (es6) the keyword 'let' was created. you can only use a variable 
defined with 'let' only once */

var camper = "James"
var camper = "David" // the original camper variable will be overwritten by the new variable

let camper = "James"
let camper = "David" // javascript wont' let you overwrite the second camper variable that also uses the 'let' keyword

/* along with 'let', the keyword 'const' was also created in later versions of javascript. 'const' is useful when you don't want a variable to change
it is supposed to be constant */

const FAV_PET = "Cats"
FAV_PET = "Dogs" // this will error out because you are trying to reassign a value to the const variable

// 'Number' is a data type in javascript which represents numeric data

const myVar = 5 + 10 // you can do numerous things with numbers in javascript, like add them together

const myVar = 12 - 6 // subtraction!

const myVar = 13 * 13 // multiplication

const myVar = 16 / 2 // division!

// you can increment or add one to a variable with the '++' operator

i++ // is the equivalent of 
i = i + 1

// alternatively, you can decrement or decrease a variable by one with the '--' operator

i-- // is the equivalent of
i = i - 1

// we can of course store decimals in a variable. decimal numbers are sometimes referred to as 'floating point' numbers or 'floats'

const myDecimal = 5.7

// we can also perform calculations with decimal numbers

const product = 2.0 * 2.5

// division time

const quotient = 4.4 / 2.0

// the 'remainder' operator '%' gives the remainder of the division of two numbers

// 5 % 2 = 1
// 5 / 2 = 2 remainder 1
// 2 * 2 = 4
// 5 - 4 = 1

// this can be most useful when trying to determine if a number is even or odd. even numbers have a remainder of 0, while odd numbers are 1

// 17 % 2 = 1
// 48 % 2 = 0

// it is common to use assignments to modify the contents of a variable

myVar = myVar + 5 // this is a common pattern to see, so instead we can use operators as a shorthand

let myVar = 1
myVar += 5 // the updated variable will then be 6

// we can do this with other math calculations, such as subtraction

myVar = myVar - 5
myVar -= 5

// multiplication

myVar = myVar * 5
myVar *= 5

// division

myVar = myVar / 5
myVar /= 5


// escaping literal quotes in strings
// when defining a string, you must use single or double quotes
// you can escape a quote in javascript by placing a '\' in front of the quote

const sampleStr = "Alan said, \"Peter is learning JavaScript\"." // which will show: Alan said, "Peter is learning JavaScript".

// quotes are not the only characters that can be escaped inside a string. some examples:

/* 
\' = single quote
\" = double quote
\\ = backslash
\n = new line
\t = tab
\r = carriage return
\b = word boundary
\f = form feed
*/

// in javascript, when the '+' operator is used with a string value, it is called the concatenation operator. you can combine strings using this operator

// 'My name is Alan,' + ' I concatenate.' = 'My name is Alan, I concatenate'

// you can also use the += operator to concatenate a string onto an existing string

let ourStr = "I come first. "
ourStr += "I come second."

// you can also use the + operator to insert a variable into a string you're building

const ourName = 'freeCodeCamp'
const ourStr = 'Hello, our name is ' + ourName + ', how are you?'

// we can also append variables to a string using the += operator

const anAdjective = 'awesome!'
let ourStr = 'freeCodeCamp is '
ourStr += anAdjective // 'freeCodeCamp is awesome!'

// you can find the length of a string value by writing '.length' after the string variable or string literal

console.log('Alan Peter'.length) // the console would output '10'

// bracket notation is a way to get a character at a specific index within a string. javascript has zero-based indexing...starts counting at zero

const firstName = 'Charles'
const firstLetter = firstName[0] // firstLetter would have the value of 'C'

// in javascript, string values are immutable, which means they cannot be changed once created

let myStr = 'Bob'
myStr[0] = 'J' // this will produce an error because you cannot changed the first character in the myStr variable

let myStr = 'Bob'
myStr = 'Job' // if you want to change the myStr value, you will have to re-assign a value to it, like so

// you can also use bracket notation to get the character at other positions within a string

const firstName = 'Ada'
const secondLetterOfFirstName = firstName[1] // the value would be 'd'

// if you want to get the last character of a string, you can subtract 1 from the string's length

const firstName = 'Ada'
const lastLetter = firstName[firstName.length - 1] // the value would be 'a'



// with javascript array variables, we can store several pieces of data in one place

const sandwich = ['peanut butter', 'jelly', 'bread']

// you can also nest arrays inside other arrays

const teams = [["bulls", 23], ["White Sox", 45]]

// you can also use bracket notation to access data inside arrays

const array = [50,60,70]
console.log(array[0]) // this would print 50
const data = array[1] // the value would be 60

// unlike strings, arrays are mutable
const ourArray = [50,40,30]
ourArray[0] = 15 // the new array would be [15,40,30]

// you can also use bracket notation to access mult-dimensional arrays, or just an array within an array

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3]; // the value would be [[10,11,12], 13, 14]
const nestedSubarray = arr[3][0]; // the value would be [10,11,12]
const element = arr[3][0][1]; // the value would be 11

// an easy way to add data to the end of an array is via the '.push()' function

const arr1 = [1,2,3]
arr1.push(4) // new array would equal [1,2,3,4]

// another way to change data is with the '.pop()' function. this will remove the last value in an array

const threeArr = [1,4,6]
const oneDown = threeArr.pop() // the value would be 6

// if you want to remove the first value from an array, you would use the .shift() method

const ourArray = ['Stimpson', 'J', ['cat']]
const removedFromArray = ourArray = ourArray.shift() // the value would be 'Stimpson'

// using the .unshift() method will add elements to the front of the array

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy"); // the array would then be ['Happy', 'J','cat']
