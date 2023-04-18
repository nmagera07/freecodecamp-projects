// debugging is one of the more important parts of coding. it's how you fix the problems in your code! we can use many tools to do so but perhaps
// the main tool at your disposal is 'console.log()'. this method prints the output to the console. it can help you diagnose bugs in your code

// we can use 'typeof' to check the data structure, or type of a variable. this can be useful when dealing with multiple data types

console.log(typeof ""); // the console will display 'string'
console.log(typeof 0); // the console will display 'number'
console.log(typeof []); // the console will display 'object'
console.log(typeof {}); // the console will display 'object'


// always have to look out for typos or spelling errors. perhaps the most common bug out there!

// unclosed parentheses, brackets, braces and quotes are also common areas where bugs can occur. fortunately modern code editors fill them in for you

// mixed usage of single and double quotes can also cause bugs in your code. it's important to keep them uniform across your code

const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.'; // this will cause an error in your code

// mixing up assignment operators and equality operators can also cause a problem

let x = 1;
let y = 2;
if (x = y) {

} else {

}

// the else statement will never run because the if statement will always be false since it's not actually checking if the two numbers are equal

// when a function or method doesn't take any arguments, you may forget to included the opening and closing parentheses when calling it

function myFunction() {
    return "You rock!";
  }
  let varOne = myFunction; // this only saves the function to the variable
  let varTwo = myFunction(); // this saves the function but you're able to run the function assigned to the variable

// a simple mistake can occur when you put arguments in the wrong order!

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(exp, base);
  console.log(power); // this will log the wrong answer to the console, 9. when the actual answer is 8

// off by one errors (my favorite) can pop up when you're trying to target a specific index of a string or array or when trying to loop over them

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

// the first example loops one too many times, while the second loops one too few times. the third example is the correct one

// finally we have the always fun, infinite loop. always be sure to have a terminal condition for your loops or it's gonna cause a bunch of problems

function loopy() {
    while(true) {
      console.log("Hello, world!");
    }
  } // this is bad

