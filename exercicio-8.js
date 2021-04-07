
var readlinesync = require('readline-sync');
var numeroInserido = readlineSync.question('Informe um numero ');;
var fim = parseInt(numeroInserido)

// fazer exatamente igual ao exercicio
console.log(`os numeros primos entre ${inicio} e ${fim} são:`);

for (let i = 0; loop <= fim; loop++) {
    let marcacao = 0;


    for (let divisor = 2; divisor < loop; divisor++) {
        if (loop % divisor == 0) {
         marcacao = 1;
            break;
        }
    }

   
    if (loop > 1 && marcacao == 0) {
        console.log(loop);
    }
}