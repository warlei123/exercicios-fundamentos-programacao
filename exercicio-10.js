var anoInserido = 2021
var contagem = 20;

function leapyear(proximosAnos, contagemAtual) {

    proximosAnos = parseInt(proximosAnos);

    var contagemDesejada = contagemAtual;

    proximosAnos++;

    var anosBissextos = '';

    while (contagemAtual > 0) {

        if (proximosAnos % 4 === 0 && (proximosAnos % 100 !== 0 || (proximosAnos % 100 === 0 && proximosAnos % 400 === 0))) {

            if (contagemAtual === 1) {

                anosBissextos += proximosAnos + ".";
            } else {

                anosBissextos += proximosAnos + ", ";
            }

            proximosAnos++;

            contagemAtual--;
        } else {

            proximosAnos++;
        }
    }

    return "Os proximos " + contagemDesejada + " anos bissextos são: " + anosBissextos;
}

console.log(leapyear(anoInserido, contagem));