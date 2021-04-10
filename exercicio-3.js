const perguntasUsuario = require('./perguntasUsuario.js')

var nomesPermitidos = ['alice', 'bob']
var nomeInserido = perguntasUsuario.perguntaNome()

if (nomesPermitidos.includes(nomeInserido))
    console.log(`Olá ${nomeInserido}.`)
else
    console.log('Olá.')