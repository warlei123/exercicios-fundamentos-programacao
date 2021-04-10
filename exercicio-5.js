const perguntasUsuario = require('./perguntasUsuario.js')
const calculos = require('./calculos.js')

numeroInserido = perguntasUsuario.perguntaNumero()
  
console.log(`A soma dos multiplos de 3 dentro de ${numeroInserido} é: ${calculos.calcularMultiplosDeTres(numeroInserido)}` )
console.log(`A soma dos multiplos de 5 dentro de ${numeroInserido} é: ${calculos.calcularMultiplosDeCinco(numeroInserido)}`)
