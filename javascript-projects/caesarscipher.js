function rot13(str) {
    return str.replace(/[A-Z]/g, cipher)
  
    function cipher(str) {
      let charCode = str.charCodeAt()
  
      return String.fromCharCode(
        (charCode + 13) <= 90 ? charCode + 13 : (charCode + 13) % 90 + 64
      )
    }
  }
  
  rot13("SERR PBQR PNZC");