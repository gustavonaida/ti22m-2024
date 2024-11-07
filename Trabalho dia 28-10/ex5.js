function getInitials(name) {
    return name
        .split(' ')                
        .map(word => word[0])      
        .join('')                  
        .toUpperCase();
}

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"