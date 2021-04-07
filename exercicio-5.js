var readlineSync = require('readline-sync');

// testar var e let para 

function calculaMultiplosTres(numeroInserido) {
    let soma = 0;

    for (let i = 0; i <= numeroInserido; i++) {
        if (i % 3 === 0) 
            soma += i;
    }

    return soma;
}

function calculaMultiplosCinco(numeroInserido) {
    let soma = 0;

    for (let i = 0; i <= numeroInserido; i++) {
        if (i % 5 === 0) {
            soma += i;
        }
    }

    return soma;
}

var textoInserido = readlineSync.question('Informe um numero: ');
// validar se é texto mesmo
var numeroInserido = parseInt(textoInserido);

while(isNaN(numeroInserido)){
    var textoInserido = readlineSync.question('Isto não é um numero, por favor, Informe um numero valido: ');
    var numeroInserido = parseInt(textoInserido);

}
  
// faz interpolacao de string
console.log(`A soma dos multiplos de 3 é:  ${calculaMultiplosTres(numeroInserido)}`);
console.log(`A soma dos multiplos de 5 é:  ${calculaMultiplosCinco(numeroInserido)}`);