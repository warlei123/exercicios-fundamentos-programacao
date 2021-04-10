const perguntasUsuario = require('./perguntasUsuario.js')
const calculos = require('./calculos.js')

var numeroInserido = perguntasUsuario.perguntaNumero()
var tabuada = calculos.calcularTabuada(numeroInserido)

console.log(`A tabuada de ${numeroInserido} é:\n${tabuada}`)
