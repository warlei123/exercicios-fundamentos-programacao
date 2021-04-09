var perguntasUsuario = require('./perguntasUsuario.js')
const calculos = require('./calculos.js');

numeroInserido = perguntasUsuario.perguntaNumero()
  
console.log(`A soma dos multiplos de 3 é: ${calculos.calcularMultiplosDeTres(numeroInserido)}`);
console.log(`A soma dos multiplos de 5 é: ${calculos.calcularMultiplosDeCinco(numeroInserido)}`);
