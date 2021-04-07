var readlineSync = require('readline-sync');

function geraNumeroAleatorio() {
    return parseInt(Math.random() * 100)
}

var numeroAleatorio = geraNumeroAleatorio()
let quantidadeTentativas = 0

while (true) {
    var textoInserido = readlineSync.question('Dê o seu palpite: ')
    var numeroInserido = parseInt(textoInserido)
    //validar se é um numero inteiro válido

    if (numeroInserido == numeroAleatorio) {
        // imprime quantas tentativas foram necessárias
        console.log('Parabéns, você acertou')

        // finaliza o while
    }

    if (numeroInserido > numeroAleatorio)
        console.log('Palpite muito alto, tente novamente.')
    else 
        console.log('Palpite muito baixo, tente novamente.')
}