var readlineSync = require('readline-sync');

var textoInserido = readlineSync.question('Informe um numero: ');
var numeroInserido = parseInt(textoInserido);

while (isNaN(numeroInserido)) {
    textoInserido = readlineSync.question('isto não é um numero, por favor, Informe um numero: ');
    numeroInserido = parseInt(textoInserido);
}

var resultado = (numeroInserido * (numeroInserido + 1) / 2);

console.log(`A soma de todos os numeros de 0 e ${numeroInserido} é : ${resultado}`)        
