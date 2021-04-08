var readlineSync = require('readline-sync');

module.exports = {
    calculaProgressaoGeometrica: calculaProgressaoGeometrica,
    calculaProgressaoAritmetica: calculaProgressaoAritmetica,
    tabuada: tabuada
}

function calculaProgressaoGeometrica(numero) {
    var resultado = 1

    for (i = 2; i <= numero; i++)
        resultado *= i

    return resultado
}

function calculaProgressaoAritmetica(numero) {
    var resultado = 1;

    for (i = 2; i <= numero; i++)
        resultado += i;

    return resultado;
}

function tabuada(numero) {
    for (let i = 1; i <= 12; i++) {
        let resultado = i * numero;

        console.log(`${numero} * ${i} = ${resultado}`);
    }
}