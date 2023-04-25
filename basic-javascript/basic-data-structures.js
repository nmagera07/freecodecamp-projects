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



// we learned how to remove items from the beginning and end of arrays, but how would we move items in between? we could use the splice() method

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

// splice can take 3 parameters, but for now we'll focus on the first two. the first number indicates the index in the array to start removing elements
// the second parameter is the amount of items we have to remove from the array
// so after splice is run, the array would contain the elements ['today', 'was', 'great']

// the third parameter in splice() is where you can add items to an array

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

// the second occurrence of '12' is removed, and '13,14' are added to the array. so the final array is [10,11,12,13,14,15]



// while splice() modifies an array, slice() copies or extracts a given number of elements into a new array, leaving the original array unmodified
// slice only takes 2 parameters, the first begins extraction and the second is when to stop extracting elements (occurs up to, but not including the element)

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

// todaysWeather would include the array ['snow', 'sleet']

// one of my favorite new features is the spread operator. this allows you to easily copy entire contents of arrays

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

// thatArray now has the same contents as thisArray. thisArray remains unmodified as well

// we can even combine arrays easier with the spread operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// we can easily check if a given element in an array is present, using the 'indexOf()' method. this takes an element as a parameter and returns the
// position of the given element, or if it isn't there, then -1 is returned

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

// dates returns -1, oranges returns 2, pears returns 1

// when working with arrays, it is handy to iterate through all the elements to find an element we need or to manipulate the data somehow
// we can easily do this using 'for loops'

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// this function iterates through and accesses each element of the array and subjects it to a simple test that we have created
// we check if the element is greater than 10 and adds it to an array if true
// this will return an array [12, 14, 80]



// at their most basic, objects are just collections of 'key-value' pairs

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

// the above object, called tekkenCharacter, includes 3 key-value pairs
// if you wanted to add another value you could use dot notation or bracket notation

tekkenCharacter.origin = 'South Korea'
tekkenCharacter['hair color'] = 'dyed orange'

// we can use these notations to access a more complex object

let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };

  nestedObject.data.onlineStatus.busy = 10;

// the busy value would then be 10, instead of 8

// we can use the 'delete' keyword to delete keys from an object

delete nestedObject.date

// we can easily check if an object has a specific property by using the '.hasOwnProperty()' method

users.hasOwnProperty('Alan');
'Alan' in users;

// both of these would return 'true'