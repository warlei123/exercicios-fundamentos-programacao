const perguntasUsuario = require('./perguntasUsuario.js');
const calculos = require('./calculos.js');

var numeroInserido = perguntasUsuario.perguntaNumero();
var opcaoInserida = perguntasUsuario.perguntaOpcaoCalculo();

switch (opcaoInserida) {
    case 'a':
        var progressaoAritmetica = calculos.calculaProgressaoAritmetica(numeroInserido);
        console.log(`A progressão aritimetica de ${numeroInserido} é: ${progressaoAritmetica}`);

        break;

    case 'g':
        var progressaoGeometrica = calculos.calculaProgressaoGeometrica(numeroInserido);
        console.log(`A progressão geometrica de ${numeroInserido} é: ${progressaoGeometrica}`);

        break;

    default:
        console.log('comando desconhecido, encerrando programa');
    }
