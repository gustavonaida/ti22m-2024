function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
}


console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false