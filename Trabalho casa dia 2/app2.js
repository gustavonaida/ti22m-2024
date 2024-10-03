function classificaTriangulo(lado1, lado2, lado3) {
    if (!ehTriangulo(lado1, lado2, lado3)) {
    return "As medidas não formam um triângulo";
    } else if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
    } else {
    return "Escaleno";
    }
   }