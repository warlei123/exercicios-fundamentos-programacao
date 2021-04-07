var readlineSync = require('readline-sync');

var nomeInserido = readlineSync.question('Qual é o seu nome? ');
var numeroDigitado = !isNaN(parseInt(nomeInserido));

while(nomeInserido == null || nomeInserido == '' || numeroDigitado)
   var nomeInserido = readlineSync.question('Nenhum nome inserido, por favor, informe o seu nome '); 

console.log(`Olá ${nomeInserido}.`)