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

