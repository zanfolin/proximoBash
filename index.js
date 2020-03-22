const readline = require('readline-sync');

function start() {
    const content = {};

    console.log('\n\n------------------\nPrograma Iniciado.\n------------------\n\n');

    content.numero = solicitaNumero();
    content.antecessor = calcularProximo();
    imprimirResultado();

    function solicitaNumero() {
        return readline.questionInt('Entre com o número: ');
    }

    function calcularProximo() {
        return content.numero + 1;
    }

    function imprimirResultado() {
        console.log(`\n\nO próximo é: ${content.antecessor}\n`);
    }

    console.log('\n\n--------------------\nPrograma Finalizado.\n--------------------\n');
}

start();