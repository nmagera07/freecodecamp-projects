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