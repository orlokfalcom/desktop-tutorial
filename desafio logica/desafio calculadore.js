const readline = require('readline');

// Função para calcular o saldo e o nível do herói
function calcularSaldo(vitorias, derrotas) {
    // Se o saldo for negativo, atribui "< 0"
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível com base nas vitórias (em ordem crescente)
    if (saldoVitorias < 0) {
        nivel = "Sem classificação";
    } else if (saldoVitorias >= 1) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
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
