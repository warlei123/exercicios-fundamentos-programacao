var readlineSync = require('readline-sync');

module.exports = {
    perguntaNumero: perguntaNumero,
    perguntaOpcaoCalculo: perguntaOpcaoCalculo,
}

function perguntaNumero() {
    var textoInserido = readlineSync.question('Informe um numero: ');
    var numeroInserido = parseInt(textoInserido);
    
    while(isNaN(numeroInserido)){
        var textoInserido = readlineSync.question('Isto não é um numero, por favor, Informe um numero valido: ');
        var numeroInserido = parseInt(textoInserido);
    }

    return numeroInserido
}

function perguntaOpcaoCalculo(){
    var opcaoInserida = readlineSync.question('Digite "A" para Progressão Aritimetica, "G" para Progressão Geometrica :').toLowerCase();


    while (opcaoInserida != 'a' && opcaoInserida != 'g') {
        var opcaoInserida = readlineSync.question('Comando invalido, por favor, Digite "A" para Progressão Aritimetica, "G" para Progressão Geometrica :').toLowerCase();
    }
    return opcaoInserida
}