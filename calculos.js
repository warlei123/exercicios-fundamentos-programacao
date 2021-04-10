var readlineSync = require('readline-sync');

module.exports = {
    calcularProgressaoGeometrica: calcularProgressaoGeometrica,
    calcularProgressaoAritmetica: calcularProgressaoAritmetica,
    calcularMultiplosDeTres: calcularMultiplosDeTres,
    calcularMultiplosDeCinco: calcularMultiplosDeCinco,
    calcularTabuada: calcularTabuada,
    calcularAnosBissextos: calcularAnosBissextos,
    calcularTodosNumerosPrimos: calcularTodosNumerosPrimos,
    calcularQuantidadeAnosDesejados: calcularQuantidadeAnosDesejados,
}

function calcularProgressaoGeometrica(numero) {
    var resultado = 1

    for (i = 2; i <= numero; i++)
        resultado *= i

    return resultado
}

function calcularProgressaoAritmetica(numero) {
    var resultado = 1

    for (i = 2; i <= numero; i++)
        resultado += i

    return resultado;
}

function calcularMultiplosDeTres(numero) {
    let soma = 0

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0)
            soma += i
    }

    return soma;
}

function calcularMultiplosDeCinco(numero) {
    let soma = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 5 === 0) {
            soma += i
        }
    }

    return soma
}

function calcularTabuada(numero) {
    var tabuada = []

    for (let i = 1; i <= 12; i++)
        tabuada.push(i * numero)

    return tabuada
}

function calcularQuantidadeAnosDesejados(numero) {
    var quantidadeAnos = numero * 4
    return quantidadeAnos / 4
}

function calcularAnosBissextos(quantidadeAnosDesejados) {
    var listaAnos = []
    var anoAtual = new Date().getFullYear()
    for (let index = 0; index < quantidadeAnosDesejados * 4; index++) {
        anoAtual++
        if (anoAtual % 4 == 0) {
            listaAnos.push(anoAtual)
        }

    }
    return listaAnos

}

function calcularTodosNumerosPrimos() {
    for (let numeroPrimo = 0; numeroPrimo >= 0; numeroPrimo++) {
        let marcacao = 0;

        for (let divisor = 2; divisor < numeroPrimo; divisor++) {
            if (numeroPrimo % divisor == 0) {
                marcacao = 1;
                break;
            }
        }

        if (numeroPrimo > 1 && marcacao == 0) {
            console.log(numeroPrimo);
        }
    }
}