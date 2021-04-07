var readlineSync = require('readline-sync');

var nomesPermitidos = ['alice', 'bob']

var nomeUsuario = readlineSync.question('Qual é o seu nome? ').toLowerCase();

if (nomesPermitidos.includes(nomeUsuario))
    console.log(`Olá ${nomeUsuario}.`)
else
    console.log('Olá.')