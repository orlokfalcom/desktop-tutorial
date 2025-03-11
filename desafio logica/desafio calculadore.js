const readline = require('readline');

// Função para calcular o saldo e o nível do herói
function calcularSaldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível com base no saldo de vitórias
    if (saldoVitorias < 0) {
        nivel = "Sem classificação";
    } else if (saldoVitorias >= 100) {
        nivel = "Imortal";
    } else if (saldoVitorias >= 90 && saldoVitorias < 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 80 && saldoVitorias < 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 50 && saldoVitorias < 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 20 && saldoVitorias < 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 10 && saldoVitorias < 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 1 && saldoVitorias < 10) {
        nivel = "Ferro";
    } else {
        nivel = "Sem classificação";
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
}

// Função para iniciar o programa
function iniciarClassificacao() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntar() {
        rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
            rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
                let vitoriasNum = parseInt(vitorias, 10);
                let derrotasNum = parseInt(derrotas, 10);

                // Validação de entrada
                if (isNaN(vitoriasNum) || isNaN(derrotasNum) || vitoriasNum < 0 || derrotasNum < 0) {
                    console.log("Entrada inválida. Insira números válidos.");
                    perguntar();
                    return;
                }

                calcularSaldo(vitoriasNum, derrotasNum);

                // Perguntar se deseja calcular novamente
                rl.question("Deseja calcular novamente? (s/n): ", (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        perguntar();
                    } else {
                        console.log("Obrigado por usar a calculadora de Rankeadas! Até a próxima!");
                        rl.close();
                    }
                });
            });
        });
    }

    perguntar();
}

// Iniciar o programa
iniciarClassificacao();
