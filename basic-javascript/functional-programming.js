// functional programming

// functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the 
// function scope: INPUT -> PROCESS -> OUTPUT
// isolated functions: there is no dependence on the state of the program, which includes global variables that are subject to change
// pure functions: the same input always given the same output
// functions with limited side effects: any changes, mutations, to the state of the program outside of the function are controlled


// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

// callbacks are the functions that are passed into another function to decide the invocation of that function
// functions that can be assigned to a variable, passed into another function, or returned from another function like any normal value, are called
// first class functions. in javascript, all functions are first class functions
// the functions that take a function as an argument, or return a function as a return value are called higher order functions
// when functions are passed in to or returned from another function, those functions that were passed in or returned can be called a 'lambda'

// don't alter a variable or object: create new variables and objects and return them if need be from a function
// declare function parameters - any computation inside a function depends only on the arguments passed to the function, not on any global variable or object



// simple array functions

// map method - iterates over each item in an array and returns a new array containing the results of calling the callback function on each element
// it does this without mutating the original array
// map has 3 arguments - first argument is the current element being processed, second is the index of the element and third is the array upon which map 
// method was used

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);

// the console would display 'John, Amy, camperCat'

// custom function to see how map actually works

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  // Only change code above this line
  
  return newArray;
};

// another useful array function is 'filter()'. filter calls a function on each element of an array and returns a new array containing only 
// the elements for which that function returns a truthy value - that is, a value which returns 'true' if pased to the 'Boolean()' constructor
// it filters the array based on the function passed to it

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 

// the console would display the value '[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]'



// the slice method returns a copy of certain elements of an array. it can take two arguments, the first is where to begin the slice, and the
// second is where to end the slice (non-inclusive)

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);

// newArray would have the value ['Dog', 'Tiger']

// splice - takes arguments fror the index of where to start removing items, and the number of items to remove. this method mutates the original array

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);

// splice returns the string London and deletes it from the cities array. cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

// we can join multiple arrays by using the 'concat' method. it returns a new array and does not mutate either of the original arrays

[1, 2, 3].concat([4, 5, 6]);

// the returned array would be [1, 2, 3, 4, 5, 6]

// we can use concat to add items to the end of an array without any mutating effects, as opposed to 'push()', which mutates the array the items
// are added to



// the 'reduce' method allows for more general forms of array processing. the reduce method iterates over each item in an array and returns a single value
// this is achieved via a callback function that is called on each iteration
// the callback function accepts four arguments. the first argument is known as the 'accumulator', which gets assigned the return value of the callback
// function from the previous iteration
// the second argument is the current element being processed
// the third is the index of the element
// and the fourth is the array upon which reduce is called
// in addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator
// if this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the
// accumulator

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

// the console would display '64'

// finding the square root of only positive integers

const squareList = arr => {
  // Only change code below this line
  // return arr;

  return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => num * num)
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


// the 'sort' method sorts the elements of an array according to the callback function

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);

// this would return the value [1, 2, 3, 4, 5]

// the 'split' method splits a string into an array of strings. it takes an argument for the delimiter, which can be a character to use to break
// up the string or a regular expression
// for example, we can put a space as the delimter, to break up the string everytime it finds a space

const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

// bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"]


// the join method is used to join the elements of an array together to create a string
// it takes an argument for the delimiter that is used to separate the array elements in the string

const arr = ["Hello", "World"];
const str = arr.join(" ");

// str would have the value of the string 'Hello World'

// we can use the 'every' method to check if every element in an array passes a certain test. it returns a boolean value of true if it passes, false if not

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

// the every method would return 'false' here

// we can use the 'some' method to check if any element passes a certain test

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});

// the method would return 'true'

