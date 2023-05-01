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



// finders keepers

function findElement(arr, func) {
  let num = 0;

  for(let i = 0; i < arr.length; i++) {
    num = arr[i]
    if(func(num)) {
      return num
    }
  }
    return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// boo who

function booWho(bool) {
  return typeof bool === "boolean" ? true : false
}

booWho(null);


// title case a sentence 

function titleCase(str) {
  let upperCase = str.toUpperCase()
  let arr = upperCase.split(' ')
  let final = ''
  let finalArr = []


  for(let i = 0; i < arr.length; i++) {
    let sliced = arr[i].slice(1).toLowerCase()
    let first = arr[i][0]
    final = first + sliced
    finalArr.push(final)
  }
  console.log(finalArr.join(' '))
  return finalArr.join(' ')
}

titleCase("I'm a little tea pot");


// slice and splice

function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice()
  arr.splice(n,0, ...arr1)

  return arr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


// falsy bouncer

function bouncer(arr) {
  let filtered = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      filtered.push(arr[i])
    }
  }

  return filtered
}

bouncer([7, "ate", "", false, 9]);


// where do i belong

function getIndexToIns(arr, num) {
  let sorted = arr.sort((a,b) => a - b)
  
  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] >= num) {
      return i
    }
  }
  return arr.length
}

getIndexToIns([10,20,30,40,50], 30);


function mutation(arr) {
  let arr1 = arr[1].toLowerCase()
  let arr2 = arr[0].toLowerCase()

  for(let i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) < 0) return false
  }

  return true
}

mutation(["hello", "hey"]);


// chunky monkey

function chunkArrayInGroups(arr, size) {
  let newArr = []

  for(let i = 0; i < arr.length; i+= size) {
    newArr.push(arr.slice(i, i + size))
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);