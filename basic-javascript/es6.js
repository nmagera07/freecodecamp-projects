// this section is about es6. a newer version of javascript established in 2015. it added many new features to the language that are very useful

// differences between 'var' and 'let': 
// when you declare a variable with 'var', it has a global scope. meaning it can be accessed anywhere within the code
// when you declare a variable with 'let' inside a block, statement or expression, it's scope is limited to that section of code

// it's important to note that objects declared with the 'const' keyword can still be changed, you just can't reassign the variable

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);

// reassigning the 's' variable will result in an error. but you can still mutate the array by changing the data inside of it

// if you don't want your data changing, you can use the 'Object.freeze' function to prevent this

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 

// this code will throw an error because you are trying to change the 'obj' object, but 'Object.freeze' is preventing you from doing so

// with es6, we can shorten functions by using arrow functions

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

// this can be rewritten as so:

const myFunc = () => {
    const myVar = "value";
    return myVar;
  }

// when there is no function body and only a return value, you can omit the 'return' so you can shorten the function even more

const myFunc = () => "value";

// in order for us to create more flexible functions, es6 introduced 'default parameters' for functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// when a parameter isn't defined, it will just use the default parameter instead

// with the 'rest' parameter, you can create functions that take a number of arguments. these arguments are stored in an array that can be accessed later

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));


// es6 also gives us the 'spread' operator, which allows us to expand arrays and other espressions in place where multiple parameters or elements are expected

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// maximus would have the value of 89



// destructuring is a new feature used to extract value from objects

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// the name variable would have the value of 'John Doe', while the age variable would have the value of '34'
// with destructuring, we can make the code look cleaner like so:

const { name, age } = user;

// we can also assign new variable names using destructuring

const user = { name: 'John Doe', age: 34 };

// can be replaced with:

const { name: userName, age: userAge } = user; // so we created a variable 'userName' which has the value of 'John Doe', and a 'userAge' variable
// with the value of '34'

// you can use the same principles for nested objects

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;

const { johnDoe: { age: userAge, email: userEmail }} = user;



// we can also use destructuring when using arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // this will print the values '1,2' to the console

// we can use commas to access a certain part of an array

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // this would print '1,2,5' to the console

// we can also destructure objects within a function argument itself

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

// can be changed to:

const profileUpdate = ({ name, age, nationality, location }) => {

}

// when profileData is passed to the function, the values are destructured from the function parameter for use within the function

