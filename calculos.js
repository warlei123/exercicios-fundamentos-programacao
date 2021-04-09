var readlineSync = require('readline-sync');

module.exports = {
    calculaProgressaoGeometrica: calculaProgressaoGeometrica,
    calculaProgressaoAritmetica: calculaProgressaoAritmetica,
    calcularMultiplosDeTres: calcularMultiplosDeTres,
    calcularMultiplosDeCinco: calcularMultiplosDeCinco,
    tabuada: tabuada,
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

function calcularMultiplosDeTres(numero) {
    let soma = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0) 
            soma += i;
    }

    return soma;
}

function calcularMultiplosDeCinco(numero) {
    let soma = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 5 === 0) {
            soma += i;
        }
    }

    return soma;
}

function tabuada(numero) {
    for (let i = 1; i <= 12; i++) {
        let resultado = i * numero;

        console.log(`${numero} * ${i} = ${resultado}`);
    }
}