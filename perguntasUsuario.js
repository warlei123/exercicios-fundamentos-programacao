var readlineSync = require('readline-sync');

module.exports = {
    perguntaNumero: perguntaNumero,
    perguntaOpcaoCalculo: perguntaOpcaoCalculo,
    perguntaNome: perguntaNome,
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
        opcaoInserida = readlineSync.question('Comando invalido, por favor, Digite "A" para Progressão Aritimetica, "G" para Progressão Geometrica :').toLowerCase();
    }
    return opcaoInserida
}

function perguntaNome() {
    var textoInserido = readlineSync.question('Informe seu nome: ');
    var nomeInserido = textoInserido;
    
    while(!isNaN(nomeInserido)){
        var textoInserido = readlineSync.question('Proibido usar numeros, por favor, informe seu nome: ');
        var nomeInserido = textoInserido
    }
 
    return nomeInserido
 }