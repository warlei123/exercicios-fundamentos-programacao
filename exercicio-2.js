var readlineSync = require('readline-sync');

var nomeInserido = readlineSync.question('Qual é o seu nome? ');
var numeroDigitado = !isNaN(parseInt(nomeInserido));


while (nomeInserido == null || nomeInserido == '' || numeroDigitado == true);
   console.log('Nenhum nome inserido, por favor, tente novamente '); 
   

console.log(`Olá ${nomeInserido}.`);