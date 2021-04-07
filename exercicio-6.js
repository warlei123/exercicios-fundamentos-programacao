var readlineSync = require('readline-sync');

function calculaProgressaoGeometrica(numero) {
    var resultado = 1;

    for (i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function calculaProgressaoAritmetica(numero) {
    var resultado = 1;

    for (i = 2; i <= numero; i++) {
        resultado += i;
    }
    return resultado;

}

var textoInserido = readlineSync.question('Informe um numero: ');
var numeroInserido = parseInt(textoInserido);


while (isNaN(numeroInserido)) {
    var textoInserido = readlineSync.question('Isto não é um numero, por favor, Informe um numero valido: ');
    var numeroInserido = parseInt(textoInserido);
}

var opcaoInserida = readlineSync.question('Digite "A" para Progressão Aritimetica, "G" para Progressão Geometrica :').toLowerCase();


    while (opcaoInserida != 'a' && opcaoInserida != 'g') {
        var opcaoInserida = readlineSync.question('Comando invalido, por favor, Digite "A" para Progressão Aritimetica, "G" para Progressão Geometrica :').toLowerCase();
    }

    switch (opcaoInserida) {
        case 'a':
            console.log(`A progressão aritimetica de ${numeroInserido} é: ${calculaProgressaoAritmetica(numeroInserido)}`);
            break;

        case 'g':
            console.log(`A progressão geometrica de ${numeroInserido} é: ${calculaProgressaoGeometrica(numeroInserido)}`);
            break;
        default:
            console.log('comando desconhecido, encerrando programa')
    }
