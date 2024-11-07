function trimSpaces(str) {
    return str
        .trim()                   
        .replace(/\s+/g, ' ');    
}

console.log(trimSpaces("   Olá    mundo!   "));       // Saída: "Olá mundo!"
console.log(trimSpaces("JavaScript    é    incrível!")); // Saída: "JavaScript é incrível!"
