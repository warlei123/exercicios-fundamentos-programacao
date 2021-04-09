for (let numeroPrimo = 0; numeroPrimo >= 0; numeroPrimo++) {
    let marcacao = 0;

    for (let divisor = 2; divisor < numeroPrimo; divisor++) {
        if (numeroPrimo % divisor == 0) {
            marcacao = 1;
            break;
        }
    }

    if (numeroPrimo > 1 && marcacao == 0) {
        console.log(numeroPrimo);
    }
}