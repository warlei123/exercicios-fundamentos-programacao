var readlineSync = require('readline-sync');

function calculaProgressaoGeometrica(numero) {
    var result = 1;

    for (i = 2; i <= numero; i++) {
        result *= i;
    }
    return result;
}

function calculaProgressaoAritmetica(numero) {

}

let textoInserido = readlineSync.question('Informe um numero: ');
let numeroInserido = parseInt(numeroInserido);

var opcaoSelecionada = readlineSync.question('Digite "S" para soma, "F" para Fatorizacao :').toLowerCase();

switch (opcaoSelecionada) {
    case 's':
        var progressaoAritmeticaNumeroInserido = (numeroInserido * (numeroInserido + 1) / 2);
        // interpolacao
        console.log('A soma é ' + progressaoAritmeticaNumeroInserido);
    break;

    case 'f':
        console.log('A fatorizacao é ' + factorial(vetorProgressaoGeometrica));
    break;

    default:
        console.log('comando invalido');
}