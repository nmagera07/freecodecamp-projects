// more fun with arrays! 

// arrays hold data. they can be one dimensional (one level) or multi dimensional (multiple levels)

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

// sure arrays can hold data, which is nice of course. but how do we access the data in an array? 
// each array item has an index (arrays in javascript are zero indexed, meaning we start at 0)
// we can use bracket notation to access items in an array

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; // now 'ourVariable' has the value of 'a'

// so now we know how to access certain items in an array. but what if we wanted to add to an array?
// you can use the methods '.push()' and '.unshift()' to do so

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');

// romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII']. unshift adds items to the beginning of an array. push adds items to the end of an array

romanNumerals.push(twentyThree);

// romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

// alternatively, what if we wanted to remove items from an array? we could use the 'pop()' and 'shift()' methods

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop(); 

// greetings would then have a value of ['what's up?', 'hello']

greetings.shift()

// greetings would then have a value of ['hello']

