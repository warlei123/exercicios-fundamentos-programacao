var readlinesync = require('readline-sync');

function geraNumeroAleatorio() {
    return 355
}

let numeroAleatorio = geraNumeroAleatorio();

let textoInserido = readlineSync.question('Informe um numero: ');
let numeroInserido = parseInt(textoInserido);

let tentativas = 0;

if (numeroInserido == numeroAleatorio) {
    console.log("Parabéns, o jogo acabou.");
}
else {

}
