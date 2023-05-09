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