function palindrome(str) {
    let original = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let reverse = original.split('').reverse().join('')
  
    return original === reverse ? true : false
    
  }
  
  palindrome("_eye");