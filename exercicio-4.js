const perguntasUsuario = require('./perguntasUsuario.js')
const calculos = require('./calculos.js')

var numeroInserido = perguntasUsuario.perguntaNumero()
var resultado = calculos.calculaProgressaoAritmetica(numeroInserido)

console.log(`A soma de todos os numeros de 1 a ${numeroInserido} é : ${resultado}`)