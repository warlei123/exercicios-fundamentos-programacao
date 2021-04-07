var readlineSync = require('readline-sync');

var textoInserido = readlineSync.question('Informe um numero: ');
var numeroInserido = parseInt(textoInserido)

console.log(`A tabuada de ${numeroInserido} é: `)

for (let i = 1; i <= 12; i++) {
    let resultado = i * numeroInserido;

    
    console.log(`${numeroInserido} * ${i} = ${resultado}`);
}