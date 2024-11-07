function capitalizeWords(str) {
    return str
        .toLowerCase()                    
        .split(' ')                       
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');                       
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"