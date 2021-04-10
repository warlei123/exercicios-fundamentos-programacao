const process = require('process')
const perguntasUsuario = require('./perguntasUsuario.js')
const calculos = require('./calculos.js')

console.log('Por favor, informe a quantidade de anos que vc deseja ver.')

var quantidadeAnos = perguntasUsuario.perguntaNumero()

console.log(`Os proximos ${calculos.calcularQuantidadeAnosDesejados(quantidadeAnos)} anos bissextos são:\n${calculos.calcularAnosBissextos(quantidadeAnos).join("\n")} `)