var readlineSync = require('readline-sync');

// testar var e let para

function calculaMultiplosTres(numero) {
    let soma = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0) 
            soma += i;
    }

    return soma;
}

function multiplicaCinco(multiplosCinco) {
    let soma = 0;

    for (let indiceCinco = 0; indiceCinco <= multiplosCinco; indiceCinco++) {
        if (indiceCinco % 5 === 0) {
            soma += indiceCinco;
        }
    }

    return soma;
}

let textoInserido = readlineSync.question('Informe um numero: ');
// validar se é texto mesmo
let numeroInformado = parseInt(textoInserido);

isNaN(numeroInformado)
  
// faz interpolacao de string
console.log("A soma dos multiplos de 3 é: " + multiplicaTres(numeroInformado));
console.log("A soma dos multiplos de 5 é: " + multiplicaCinco(numeroInformado));