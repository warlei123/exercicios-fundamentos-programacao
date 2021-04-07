for (let numeroPrimo = 0; numeroPrimo >=0; numeroPrimo++) {
    let resto = 0;

    for (let divisor = 2; divisor < numeroPrimo; divisor++) {
        if (numeroPrimo % divisor == 0) {
            resto = 1;
            break;
        }
    }

    if (numeroPrimo > 1 && resto == 0) {
        console.log(numeroPrimo);
    }
}