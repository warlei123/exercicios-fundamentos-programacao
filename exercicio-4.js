
var readlineSync = require('readline-sync');
// enquanto nao passar um numero valido, não para de pedir o numero
var textoInserido = readlineSync.question('Informe um numero: ');
// validar se o que foi digitado é um numero
var numeroInserido = parseInt(textoInserido);

while (isNaN(numeroInserido)) {
    var textoInserido = readlineSync.question('isto não é um numero, por favor, Informe um numero: ');
    var numeroInserido = parseInt(textoInserido);
}

var resultado = (numeroInserido * (numeroInserido + 1) / 2);

console.log(`A soma de todos os numeros de 0 e ${numeroInserido} é : ${resultado} `)        