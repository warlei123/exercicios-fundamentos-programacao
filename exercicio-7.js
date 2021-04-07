var readlineSync = require('readline-sync');

var textoInserido = readlineSync.question('Informe um numero: ');
var vetor = parseInt(numero)

for (let i = 1; i <= 12; i++) {
    let result = i * vetor;

    console.log(`${vetor} * ${i} = ${result}`);
}