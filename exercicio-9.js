var readlineSync = require('readline-sync')
const calculos = require('./calculos.js')
var perguntasUsuario = require('./perguntasUsuario.js')

var numeroTeto = perguntasUsuario.perguntaNumero()

function geraNumeroAleatorio() {
    return parseInt(Math.random() * numeroTeto)
}

var numeroAleatorio = geraNumeroAleatorio()
let quantidadeTentativas = 1

console.log(`estou pensando em um numero de 0 a ${numeroTeto}, tente adivinhar.`)

while (true) {
    var textoInserido = readlineSync.question('Dê o seu palpite: ')
    var numeroInserido = parseInt(textoInserido)

    if (isNaN(numeroInserido)) {
        console.log('Isto nao é um nunero, tente novamente: ')
        
        continue
    }

    if (numeroInserido == numeroAleatorio) {
        console.log(`Parabéns, você acertou\nQuantidade de Tentativas: ${quantidadeTentativas}`)

        break
    }

    if (numeroInserido > numeroAleatorio)
        console.log('Palpite muito alto, tente novamente.')

    else
        console.log('Palpite muito baixo, tente novamente.')

    quantidadeTentativas++
}