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