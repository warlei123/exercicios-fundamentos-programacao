const perguntasUsuario = require('./perguntasUsuario.js');
const calculos = require('./calculos.js');

var numeroInserido = perguntasUsuario.perguntaNumero()
var tabuada = calculos.tabuada(numeroInserido)

console.log(`A tabuada de ${numeroInserido} é: ${tabuada} `)


