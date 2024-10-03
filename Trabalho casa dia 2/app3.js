function calculaDosagem(idade, peso) {
    let mg;
    if (idade >= 12) {
    mg = (peso >= 60) ? 1000 : 875;
    } else {
    if (peso >= 5 && peso <= 9) {
    mg = 125;
    } else if (peso >= 9.1 && peso <= 16) {
    mg = 250;
    } else if (peso >= 16.1 && peso <= 24) {
    mg = 500;
    } else if (peso > 24) {
    mg = 750;
    } else {
    return "Peso fora da faixa";
    }
    }
    return (mg / 500) * 20; // Convertendo para gotas
   }