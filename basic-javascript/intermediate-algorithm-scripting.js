// sum all numbers in a range

function sumAll(arr) {
    let empty = []
  
    arr.sort((a,b) => a - b)
  
    for(let i = arr[0]; i < arr[1] + 1; i++) {
      empty.push(i)
    }
    console.log(empty)
    return empty.reduce((x,y) => x + y, 0)
  }
  
  sumAll([5, 10]);

  

// diff two arrays

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// seek and destroy

function destroyer(arr) {
    delete arguments['0']
    let arr1 = Object.values(arguments)
  
    return arr.concat(arr1).filter(item => !arr.includes(item) || !arr1.includes(item))
  
    
    
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// wherefore art thou

function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (!obj.hasOwnProperty(souceKeys[i]) ||
            obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// spinal tap case

function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
      .toLowerCase()
      .split(/(?:_| )+/)
      .join("-");
  }
  
  // test here
  spinalCase("This Is Spinal Tap");
  
  
  
  // pig latin
  
  function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  translatePigLatin("consonant");


// search and replace

function myReplace(str, before, after) {
  // console.log(str.replace(before, after))
  if(before.startsWith(before[0].toUpperCase())) {
    const capitalized = after.charAt(0).toUpperCase() + after.slice(1)
    return str.replace(before, capitalized)
  } else if(after.startsWith(after[0].toUpperCase())) {
    const lowerCased = after.charAt(0).toLowerCase() + after.slice(1)
    return str.replace(before, lowerCased)
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



// dna pairing

function pairElement(str) {
  let arr = str.split('')
  let arr2 = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'C') {
      arr2.push([arr[i], 'G'])
    }
    if(arr[i] === 'G') {
      arr2.push([arr[i], 'C'])
    }
    if(arr[i] === 'A') {
      arr2.push([arr[i], 'T'])
    }
    if(arr[i] === 'T') {
      arr2.push([arr[i], 'A'])
    }
  }
  return arr2
}

pairElement("ATCGA");


// missing letters

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {

    const charCode = str.charCodeAt(i);
  console.log(charCode)
    if (charCode !== str.charCodeAt(0) + i) {

      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");


// sorted union

function uniteUnique(arr) {
  let flatArr = Object.values(arguments).flat()
  let uniqueChars = [...new Set(flatArr)]
  
  return uniqueChars
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// convert html entities

function convertHTML(str) {
  let arr = str.split('')

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '&') {
      arr[i] = '&amp;'
    }
    if(arr[i] === '<') {
      arr[i] = '&lt;' 
    }
    if(arr[i] === '>') {
      arr[i] = '&gt;'
    }
    if(arr[i] === '"') {
      arr[i] = '&quot;'
    }
    if(arr[i] === "'") {
      arr[i] = '&apos;'
    }
  }
  console.log(arr)
  return arr.join('')
}

convertHTML("Dolce & Gabbana");



// sum all odd fibonacci numbers

function sumFibs(num) {
  let arr = [0,1]

  for(let i = 2; i <= num; i++) {
    arr[i] = arr[i-2] + arr[i-1]
    
    
  }
  return arr.filter((int) => int % 2 !== 0 && int <= num).reduce((a,b) => a + b, 0)
}

sumFibs(1000);


// sum all primes

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

// drop it

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


// steamroller

function steamrollArray(arr) {
  while (arr.find((elem) => Array.isArray(elem))) {
  arr = [].concat.apply([], arr);
}
return arr
}
steamrollArray([1, [], [3, [[4]]]]);


// binary agents

function binaryAgent(str) {
  let arr = str.split(' ')

  return arr.map(elem => String.fromCharCode(parseInt(elem, 2))).join('')
}



// arguments optional

function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}


