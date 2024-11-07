function replaceChar(str, oldChar, newChar) {
    const regex = new RegExp(oldChar, 'g');  
    return str.replace(regex, newChar);      
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"