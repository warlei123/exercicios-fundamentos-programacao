var readlineSync = require('readline-sync');

// enquanto nao passar um numero valido, não para de pedir o numero
var textoInserido = readlineSync.question('Informe um numero: ');

// validar se o que foi digitado é um numero
var numeroInserido = parseInt(numeroInserido);

var resultado = (numeroInserido * (numeroInserido + 1) / 2);

console.log(`Resultado: ${resultado}.`)