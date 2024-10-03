function calcularJuros(c, i, n){
    return c*(1+i/100)**n

}

function calc(){
    let montante = calcularJuros(document.getElementById('capital').value, document.getElementById('taxa').value, document.getElementById('periodo').value)
    document.getElementById('montante').innerText=montante
    document.getElementById('capital2').innerText=document.getElementById('capital').value
    document.getElementById('juros').innerText=montante - document.getElementById('capital').value
}

document.getElementById('calcular').onclick = calc