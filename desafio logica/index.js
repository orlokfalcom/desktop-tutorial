// Classificador de nível de Herói (versão para Node.js)

const readline = require('readline');

// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
    let nivel = "";

    if(xp<100){
        nivel= "iniciante"
    }
    else if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Programa principal para entrada de dados e exibição da classificação
function iniciarClassificacao() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntar() {
        rl.question("Digite o nome do herói: ", (nomeHeroi) => {
            rl.question("Digite a quantidade de XP do herói: ", (xp) => {
                let xpHeroi = parseInt(xp, 10);

                // Validação de entrada
                if (isNaN(xpHeroi) || xpHeroi < 0) {
                    console.log("XP inválido. Por favor, insira um número válido.");
                    perguntar();
                    return;
                }

                classificarHeroi(nomeHeroi, xpHeroi);

                rl.question("Deseja inserir outro herói? (s/n): ", (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        perguntar();
                    } else {
                        console.log("Encerrando o programa...");
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
