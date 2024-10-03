function converteMedida(centimetros, unidade) {
    if (unidade === "m") {
    return centimetros / 100;
    } else if (unidade === "mm") {
    return centimetros * 10;
    } else if (unidade === "km") {
    return centimetros / 100000;
    } else {
    return "Unidade inválida";
    }
   }