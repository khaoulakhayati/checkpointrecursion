function isPalindrome(x) {
    if (x.length <= 1) {
      return true;
    }
  
    if (x[0] === x[x.length - 1]) {
      return isPalindrome(x.slice(1, x.length - 1));
    } else {
      return false;
    }
  }
  
  // Test de la fonction
  console.log(isPalindrome("hah")); //vrai 
  console.log(isPalindrome("hahaho")); //non
