function calcular(){
    let troco = Number(document.getElementById('troco').value)
    const cd20= document.getElementById('20')
    const cd10 = document.getElementById('10')
    const cd1 = document.getElementById('1')

    cd20.innerText=parseInt(troco/20)
    troco = troco%20

    cd10.innerText=parseInt(troco/10)
    troco = troco%10

    cd1.innerText=parseInt(troco/1)
    troco = troco%1

}
document.getElementById('calcular').onclick = calcular