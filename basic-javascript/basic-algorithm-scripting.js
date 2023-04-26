// convert celsius to fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);



// reverse a string

function reverseString(str) {
    let reverse = []
    str.split('')
  
    for(let i = str.length - 1; i >= 0; i--) {
      reverse.push(str[i])
    }
    return reverse.join('');
  }
  
  reverseString("hello");



// factorialize a number

function factorialize(num) {
    let start = 1
    let product = start
  
    for(let i = start; i <= num; i++) {
      product *= i
      
    }
    return product;
  }
  
  factorialize(5);



// find the longest word in a string

function findLongestWordLength(str) {
    let arr = str.split(' ')
    let max = []
  
    for(let i = 0; i < arr.length; i++) {
      max.push(arr[i].length)
      
    }
    return Math.max(...max);
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");



// return largest number in arrays

function largestOfFour(arr) {
    let maxArr = []
  
    for(let i = 0; i < arr.length; i++) {
      maxArr.push(Math.max(...arr[i]))
    }
    console.log(maxArr)
    return maxArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// confirm the ending

function confirmEnding(str, target) {
    let end = str.slice(-target.length)
    
    return end === target ? true : false;
  }
  
  confirmEnding("Bastian", "n");


// repeat a string repeat a string

function repeatStringNumTimes(str, num) {
    let newStr = ''
  
    if(num <= 0) {
      return ""
    } 
  
    for(let i = 1; i <= num; i++) {
      newStr += str
    }
  
    return newStr
  }
  
  repeatStringNumTimes("abc", 3);



// truncate a string

function truncateString(str, num) {
    if(str.length <= num) {
      return str
    } else {
      let truncated = str.slice(0,num) + '...'
      return truncated
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

